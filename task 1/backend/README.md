# AWS Lambda Node.js backend

1. Create a bucket in your AWS account.

2. Install serverless in your local machine by running the command `npm i serverless -g` and run the command `serverless` to configure your aws credentials with serverless.

3. Install the dependencies by running the command `npm i`.

4. Go to `.env` file and change the values of `S3_BUCKET_NAME`, `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY` and `REGION` with your values.

5. Go to `serverless.yml` file and change the value of `provider.region` with your region.

6. To run the application, run the command `sls deploy` in your local terminal.

7. Your terminal will give you an `API-URL`. That is the API-URL for your application deployed on AWS Lambda.
