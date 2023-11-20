# Page Mosaic Web Platform | Website Starter

This is stage 1 of the development process for the Page Mosaic Web Platform.

Using this code, you can deploy a static web page to AWS with just a single command.

### Prerequisites:
* Create AWS user in IAM Identity Center with administrative permission
* Install NodeJS
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

* To ensure you are on the correct branch, use:
```shell
git branch
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
aws configure sso —profile [user name]
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

