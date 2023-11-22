# Website Starter on AWS

> This boilerplate is a component of the [Page Mosaic Web Platform](https://github.com/pagemosaic).

This starter kit offers an optimal solution for hosting static websites on Amazon Web Services (AWS). 
To deploy your website, simply transfer your website files to the `/platform/web-app` directory. 
Following this, execute the command `pnpm deploy-platform` to initiate the deployment process.

## What You Will Receive
Upon successful deployment of the website resources to your AWS account, you will obtain:
* A CDN distribution for your static website, accessible through a uniquely generated AWS URL.
* An S3 bucket, serving as the storage location for your website's files.

**Additionally,** this README includes a step-by-step video tutorial guiding you through the process of setting up a custom domain name for your website.

## Set Up Your AWS Environment
* Create an administrative user on AWS and configure AWS CLI locally, as demonstrated in the video tutorial linked below:
   <p>
      <a href="https://youtu.be/mXf6EvOvvKY" target="_blank">
   <img src="https://github.com/pagemosaic/.github/blob/main/images/website_starter_videos_covers/create_admin_on_aws.png" alt="SSL certificate issuing" width="45%"/>
      </a>
   </p>

* Use the following command to install the AWS Cloud Development Kit (CDK) Toolkit globally on your system:
```shell
npm install -g aws-cdk
```

## Set Up Project Source Code
* Clone repository:
```shell
git clone https://github.com/pagemosaic/pagemosaic-website-starter.git
```

* Navigate to folder::
```shell
cd pagemosaic-website-starter
```

* Install dependencies:
```shell
pnpm install
```

* Configure environment:
  * Copy `.env.example` to `.env`
  * Set:
    * `AWS_REGION` - your region on AWS
    * `AWS_PROFILE_NAME` - your SSO user name
    * `STACK_NAME` - AWS Stack name you prefer

## Configure a Custom Domain Name and SSL Certificate
* Initially, purchase a domain name from a domain registrar of your choice.
* Once you have your domain name, navigate to the AWS Management Console in your browser.
* Request a new SSL certificate for your domain, as demonstrated in the video tutorial linked below.
   <p>
      <a href="https://youtu.be/kiEkHLNfAGo" target="_blank">
   <img src="https://github.com/pagemosaic/.github/blob/main/images/website_starter_videos_covers/SSL_certificate_request.png" alt="SSL certificate issuing" width="45%"/>
      </a>
   </p>
* Configure environment:
  * `CERTIFICATE_ARN` - This is the Amazon Resource Name (ARN) of your AWS SSL certificate. Copy the ARN value as shown in the video tutorial.
  * `DOMAIN_NAMES` - Specify your domain name here, along with any subdomains, separated by commas.

## Deployment
* Run CDK Bootstrap (only once if not previously done):
```shell
pnpm bootstrap-platform
```
* Execute CDK deployment:
```shell
pnpm deploy-platform
```

* Look for `WebsiteDomainName` in the output and visit the URL.

## Associate a Custom Domain Name with Your Website CDN
After setting up your custom domain name and obtaining a validated SSL certificate (as detailed in the previous section), you can proceed to bind the custom domain to your website's Content Delivery Network (CDN). Follow these steps to complete the process:
* Ensure you have a custom domain name and a validated SSL certificate, as shown in the previous tutorial.
* Watch the following video tutorial to learn how to bind your custom domain to the website CDN. 
   <p>
      <a href="https://youtu.be/6TTTo1UME00" target="_blank">
   <img src="https://github.com/pagemosaic/.github/blob/main/images/website_starter_videos_covers/custom_domain_to_cdn.png" alt="Custom domain name for website CND" width="45%"/>
      </a>
   </p>
* Once the binding process is complete, open a web browser and enter your domain name address to view your website.
* **Please note:** DNS records may take some time to propagate, potentially up to 24 hours, before your website becomes accessible via the new domain name.

## Add Website Files
* Transfer all your static website files into the `/platform/web-app` directory.
* **Important**: Make sure to include an `index.html` file within the `/platform/web-app` directory. This file acts as the starting point of your website.
* Run the deployment command again to update your website. The deployment process is optimized to intelligently update only the static files in the S3 bucket, avoiding unnecessary operations.
```shell
pnpm deploy-platform
```

## Clean up

* Remove deployment:
```shell
pnpm destroy-platform
```

## Troubleshooting

For questions, visit: [Discuss Website Starter](https://github.com/orgs/pagemosaic/discussions/categories/website-starter)

Follow [Alex Pust](https://twitter.com/alex_pustovalov) on Twitter for updates on the Page Mosaic Web Platform development.

## License

MIT
