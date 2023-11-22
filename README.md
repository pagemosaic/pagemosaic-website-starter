# Website Starter on AWS

> This boilerplate is a component of the Page Mosaic Web Platform.

This starter is ideal for hosting static websites on AWS. 
Simply place your website files in the `/platform/web-app` directory and execute `pnpm deploy-platform`.

## Set up localhost environment

#### #1 AWS User Setup and AWS CLI Installation:

  1. Enable IAM Identity Center on AWS Account:
     * AWS recommends using IAM Identity Center for user management. Start by enabling it on your AWS account.
  1. Create a User in IAM Identity Center:
     * Follow the instructions provided in the AWS documentation to create a user in IAM Identity Center: [Create a User in IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-use-identity-center-directory-create-user-in-identity-center.html).
  1. Add Administrative Rights to the Permission Set:
     * Add administrative rights to your user by creating an administrative permission set in IAM Identity Center, as outlined in the AWS documentation: [Create an Administrative Permission Set](https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-create-an-administrative-permission-set.html).
  1. Link Administrative Rights to the User:
     * Assign the administrative permission set to your user by following the steps provided in the AWS documentation: [Assign Account Access](https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-assign-account-access-admin-user.html).
  1. Install AWS CLI on Your Computer:
     * To interact with AWS from the command line, install AWS CLI. Instructions for installation can be found here: [Installing the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
  1. Configure User's Access via AWS CLI:
     * Configure your user's access on your local machine by running the command:
      ```shell
      aws configure sso —profile [user name]
      ```
      > Use the profile option to manage different user configurations on your computer.
  1. Complete the Authorization Process:
     * Specify the session name for the session token.
       <p>
         <img src="https://github.com/pagemosaic/.github/blob/main/images/aws_sso_auth/aws_sso_auth_6.png" alt="Image 6" width="33%" style="border-radius: 10px; box-shadow: 5px 5px 10px grey;"/>
       </p>
  1. Authorize in the browser when prompted by the terminal and complete any required forms.
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

#### #2 Install CDK Toolkit on localhost
```shell
npm install -g aws-cdk
```

## Pre-deployment preparations
* You need to clone the repository to your local machine. Use the command:
```shell
git clone https://github.com/pagemosaic/pagemosaic-website-starter.git
```

* After cloning, navigate to the repository's folder using:
```shell
cd pagemosaic-website-starter
```

* Install dependencies:
```shell
pnpm install
```

* Copy `.env.example` file to `.env` and specify the following variables:
  * `AWS_REGION` - your region on AWS
  * `AWS_PROFILE_NAME` - your SSO user name
  * `STACK_NAME` - AWS Stack name you prefer

* Run the CDK bootstrap:
```shell
pnpm bootstrap-platform
```
> Run this command only once if you haven't deployed the starter before on the AWS account 

## Deployment

* Run the CDK deployment:
```shell
pnpm deploy-platform
```

* Find in the terminal output line with `WebsiteDomainName` - a CloudFront distribution name. Copy and paste it into the browser address field.


## Clean up

* Run the CDK destroy:
```shell
pnpm destroy-platform
```

## Troubleshooting

If you have any questions, do not hesitate to discuss them here: [Discuss Website Starter](https://github.com/orgs/pagemosaic/discussions/categories/website-starter)

Follow me on Twitter for new dev jorney stages where I keep journal about Page Mosaic Web Platform development: [Alex Pust](https://twitter.com/alex_pustovalov)


