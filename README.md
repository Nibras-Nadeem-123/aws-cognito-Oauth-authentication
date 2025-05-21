<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

 
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

 
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->


# CI/CD Pipeline in AWS Using CDK (Beginner Friendly)

This project shows you how to build a simple **CI/CD pipeline using AWS CDK** (TypeScript), **CodePipeline**, **CodeBuild**, and **GitHub** as the source.

If you're new to DevOps or AWS, this guide is for you!

---

## What is CI/CD?

- **CI (Continuous Integration):** Automatically builds and tests your code when you push changes.
- **CD (Continuous Deployment):** Automatically deploys your code after successful builds/tests.

---

## Tools Used

- [AWS CDK (TypeScript)](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [AWS CodePipeline](https://aws.amazon.com/codepipeline/)
- [AWS CodeBuild](https://aws.amazon.com/codebuild/)
- [GitHub](https://github.com) – as source

---

## Prerequisites

- GitHub repo with your code
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) configured
- Node.js & AWS CDK:
  ``` 
  npm install -g aws-cdk
# Setup Instructions
1. Initialize CDK Project
```
    mkdir my-cicd-pipeline && cd my-cicd-pipeline
    cdk init app --language typescript
```
- Install necessary packages:
```
    npm install aws-cdk-lib constructs
    npm install @aws-cdk/aws-codepipeline @aws-cdk/aws-codepipeline-actions @aws-cdk/aws-codebuild @aws-cdk/aws-secretsmanager
```

2. Add CI/CD Code to Stack
Replace the contents of lib/my-cicd-pipeline-stack.ts:

``` 
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as cpactions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';

export class Ec2CicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // GitHub Token from Secrets Manager
    const githubToken = cdk.SecretValue.secretsManager('GITHUB_TOKEN_NAME');

    const sourceOutput = new codepipeline.Artifact();
    const buildOutput = new codepipeline.Artifact();

    const pipeline = new codepipeline.Pipeline(this, 'your-pipeline-name', {
      pipelineName: 'your-pipeline-name',
    });

    // Source Stage
    pipeline.addStage({
      stageName: 'Source',
      actions: [
        new cpactions.GitHubSourceAction({
          actionName: 'GitHub_Source',
          owner: 'your-github-username',
          repo: 'your-repo-name',
          oauthToken: githubToken,
          output: sourceOutput,
          branch: 'main',
        }),
      ],
    });

    //  Build Stage
    const buildProject = new codebuild.PipelineProject(this, 'buildProject', {
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            commands: ['npm install'],
          },
          build: {
            commands: ['npm run build'],
          },
        },
        artifacts: {
          files: ['**/*'],
        },
      }),
    });

    pipeline.addStage({
      stageName: 'Build',
      actions: [
        new cpactions.CodeBuildAction({
          actionName: 'Build',
          project: buildProject,
          input: sourceOutput,
          outputs: [buildOutput],
        }),
      ],
    });

    const instanceId = 'your-instance-id';

    // Deploy Stage via SSM
    const deployAction = new cpactions.CodeBuildAction({
      actionName: 'DeployToEC2',
      project: new codebuild.PipelineProject(this, 'SSMDeployProject', {
        buildSpec: codebuild.BuildSpec.fromObject({
          version: '0.2',
          phases: {
            build: {
              commands: [
                `aws ssm send-command \\`,
                `  --document-name "AWS-RunShellScript" \\`,
                `  --targets '[{"Key":"InstanceIds","Values":["${instanceId}"]}]' \\`,
                `  --parameters '{"commands":["cd /home/ec2-user/myapp && git pull && npm install && npm run build && pm2 restart app"]}' \\`,
                `  --region ${this.region}`
              ],
            },
          },
        }),
        environment: {
          buildImage: codebuild.LinuxBuildImage.STANDARD_5_0,
          privileged: true,
        },
        environmentVariables: {
          INSTANCE_ID: { value: instanceId },
        },
        role: new iam.Role(this, 'DeployRole', {
          assumedBy: new iam.ServicePrincipal('codebuild.amazonaws.com'),
          managedPolicies: [
            iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMFullAccess'),
            iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2ReadOnlyAccess'),
          ],
        }),
      }),
      input: buildOutput,
    });

    pipeline.addStage({
      stageName: 'Deploy',
      actions: [deployAction],
    });
  }
}

```
Note: Store your GitHub token in AWS Secrets Manager as GITHUB_TOKEN_NAME.

3. Deploy the Pipeline
``` 
cdk bootstrap
cdk deploy
```
 