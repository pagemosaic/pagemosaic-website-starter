# Website Starter on AWS

> This boilerplate is a component of the Page Mosaic Web Platform.

This starter is ideal for hosting static websites on AWS.
Simply place your website files in the `/platform/web-app` directory and execute `pnpm deploy-platform`.

## How the website will work on AWS
After the deployment of the website resources to your account on AWS, you will have a CDN distribution of your static website.
Also, there will be a S3 bucket where your files will be located. The CDN distribution will have random AWS URL. 

## Set Up Localhost Environment

#### #1 AWS User Setup and AWS CLI Installation:

1. Enable IAM Identity Center on AWS Account:
    * AWS recommends using IAM Identity Center for user management. Start by enabling it on your AWS account.
1. Create a User in IAM Identity Center:
    * Follow the AWS guide to create a user: [Create a User in IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-use-identity-center-directory-create-user-in-identity-center.html).
1. Add Administrative Rights:
    * Create an administrative permission set as detailed here: [Create an Administrative Permission Set](https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-create-an-administrative-permission-set.html).
1. Link Administrative Rights to the User:
    * Assign the administrative permission set using these steps: [Assign Account Access](https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-assign-account-access-admin-user.html).
1. Install AWS CLI:
    * [Installing the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
1. Configure AWS CLI:
    * Run the following command to configure access:
    ```shell
    aws configure sso --profile [user name]
    ```
   > Manage different user configurations using the profile option.
1. Complete Authorization:
    * Specify the session name for the token. Authorize in the browser as prompted.
      <p>
        <img src="https://github.com/pagemosaic/.github/blob/main/images/aws_sso_auth/aws_sso_auth_6.png" alt="Image 6" width="33%" style="border-radius: 10px; box-shadow: 5px 5px 10px grey;"/>
      </p>
1. Refer to the following authorization process images:
      <p>
      <table>
        <tr>
          <td width="33%"><img src="https://github.com/pagemosaic/.github/blob/main/images/aws_sso_auth/aws_sso_auth_1.png" alt="Image 1" style="max-width:100%;"></td>
          <td width="33%"><img src="https://github.com/pagemosaic/.github/blob/main/images/aws_sso_auth/aws_sso_auth_2.png" alt="Image 2" style="max-width:100%;"></td>
          <td width="33%"><img src="https://github.com/pagemosaic/.github/blob/main/images/aws_sso_auth/aws_sso_auth_3.png" alt="Image 3" style="max-width:100%;"></td>
        </tr>
        <tr>
          <td width="33%"><img src="https://github.com/pagemosaic/.github/blob/main/images/aws_sso_auth/aws_sso_auth_4.png" alt="Image 1" style="max-width:100%;"></td>
          <td width="33%"><img src="https://github.com/pagemosaic/.github/blob/main/images/aws_sso_auth/aws_sso_auth_5.png" alt="Image 2" style="max-width:100%;"></td>
          <td width="33%"></td>
        </tr>
      </table>
      </p>

#### #2 Install CDK Toolkit
```shell
npm install -g aws-cdk
```

## Pre-Deployment Preparations
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

* Run CDK Bootstrap (only once if not previously done):
```shell
pnpm bootstrap-platform
```

## Deployment

* Execute CDK deployment:
```shell
pnpm deploy-platform
```

* Look for `WebsiteDomainName` in the output and visit the URL.

## Add Website Files
* Transfer all your static website files into the `/platform/web-app` directory.
* **Important**: Make sure to include an `index.html` file within the `/platform/web-app` directory. This file acts as the starting point of your website.
* Run the deployment command again to update your website. The deployment process is optimized to intelligently update only the static files in the S3 bucket, avoiding unnecessary operations.

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
