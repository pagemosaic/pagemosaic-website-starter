import * as cdk from 'aws-cdk-lib';
import {Stack} from 'aws-cdk-lib/core';
import {Construct} from 'constructs';
import {WebsiteConstruct} from '../constructs/website-construct';

export interface PlatformStackProps {

}

export class PlatformStack extends Stack {
    constructor(scope: Construct, id: string, props?: PlatformStackProps) {
        super(scope, id, props);
        const websiteConstruct = new WebsiteConstruct(this, 'WebsiteConstruct');

        // Output the distribution domain name so it can be easily accessed
        new cdk.CfnOutput(this, 'WebsiteDomainName', {
            value: websiteConstruct.distribution.distributionDomainName,
        });
    }
}
