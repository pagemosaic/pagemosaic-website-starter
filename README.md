## Website Starter on AWS

Using this code you can deploy a static web page into AWS with only single command.

### Add admin user to AWS environment

Set up a user with administrative rights and programmatic access to AWS resources using AWS IAM Identity Center (formerly AWS Single Sign-On):

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
  1. Authorize in the browser when prompted by the terminal and complete any required forms.
     |     |     |     |
     | --- | --- | --- |
     | ![Image 1](IMAGE_URL_1) | ![Image 2](IMAGE_URL_2) | ![Image 3](IMAGE_URL_3) |


### Preparations before use:

* Install AWS CLI using this instructions: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
* Install CDK Toolkit:
```shell
npm install -g aws-cdk
```

### Usage:
* You need to clone the repository to your local machine. Use the command:
```shell
git clone -b stage-1 https://github.com/pagemosaic/pagemosaic-website-starter.git
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

* Configure user SSO session:
```shell
aws configure sso --profile [user name]
```

* Run the CDK bootstrap:
```shell
pnpm bootstrap-platform
```

* Run the CDK deployment:
```shell
pnpm deploy-platform
```

* Find in the terminal output line with `WebsiteDomainName` - a CloudFront distribution name. Copy and paste it into the browser address field.
* Enjoy.


### Clean up

* Run the CDK destroy:
```shell
pnpm destroy-platform
```

