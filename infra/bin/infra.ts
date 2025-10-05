#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';

const app = new cdk.App();

// Define the environment for the stack
// This tells your CDK application exactly which AWS Account and Region it should target.
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID || '690246911216',

  region: process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'eu-north-1',
};

new InfraStack(app, 'InfraStack', {
  env: env,
});