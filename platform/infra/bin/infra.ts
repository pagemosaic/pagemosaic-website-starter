#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PlatformStack } from '../src/stacks/platform-stack';

const stackName = process.env.STACK_NAME;

if (!stackName) {
    throw Error ('Missing STACK_NAME in env');
}

const app = new cdk.App();
new PlatformStack(app, stackName);
