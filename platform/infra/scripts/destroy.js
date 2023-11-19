const {execSync} = require('child_process');

const AWS_PROFILE_NAME = process.env.AWS_PROFILE_NAME; // Get AWS profile name from environment variable

console.log('Please wait. Destroying resources...');
// Proceed with the CDK destroying
execSync(`cdk destroy --force --profile ${AWS_PROFILE_NAME}`, {stdio: 'inherit'});
