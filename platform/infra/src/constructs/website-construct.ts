import { resolve } from "node:path";
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';

const certificateArn = process.env.CERTIFICATE_ARN;
const domainNames = process.env.DOMAIN_NAMES ? process.env.DOMAIN_NAMES.split(',') : [];

export class WebsiteConstruct extends Construct {
    public readonly bucket: s3.Bucket;
    public readonly distribution: cloudfront.Distribution;

    constructor(scope: Construct, id: string) {
        super(scope, id);
        console.log('WebApp Path: ', resolve('../web-app'));
        // Create an S3 bucket where the website files will be stored
        this.bucket = new s3.Bucket(this, 'WebAppBucket', {
            publicReadAccess: false, // It's recommended to keep this false as CloudFront will be used to serve the content
            removalPolicy: cdk.RemovalPolicy.DESTROY, // BE CAREFUL with this in production
            autoDeleteObjects: true, // BE CAREFUL with this in production
        });

        // Define an OAI for CloudFront to access the S3 bucket
        const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'OAI');
        this.bucket.grantRead(originAccessIdentity);

        // Create the CloudFront distribution
        if (certificateArn && domainNames.length > 0) {
            this.distribution = new cloudfront.Distribution(this, 'WebAppDistribution', {
                defaultBehavior: {
                    origin: new origins.S3Origin(this.bucket, { originAccessIdentity }),
                    responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS_WITH_PREFLIGHT_AND_SECURITY_HEADERS,
                    viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
                },
                defaultRootObject: 'index.html',
                domainNames: domainNames,
                certificate: acm.Certificate.fromCertificateArn(this, 'CustomCertificate', certificateArn),
            });
        } else {
            this.distribution = new cloudfront.Distribution(this, 'WebAppDistribution', {
                defaultBehavior: {
                    origin: new origins.S3Origin(this.bucket, { originAccessIdentity }),
                    responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS_WITH_PREFLIGHT_AND_SECURITY_HEADERS,
                    viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
                },
                defaultRootObject: 'index.html',
            });
        }

        // Deploy website contents to S3 bucket
        new s3deploy.BucketDeployment(this, 'WebAppDeployment', {
            sources: [s3deploy.Source.asset(resolve('../web-app'))],
            destinationBucket: this.bucket,
            distribution: this.distribution,
            distributionPaths: ['/*'], // Invalidate the CloudFront cache
        });
    }
}
