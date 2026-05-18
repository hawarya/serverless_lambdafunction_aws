# AWS Serverless URL Shortener


This project demonstrates how to build a fully serverless application using:

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Node.js

---

# 🚀 Features

- Create short URLs
- Redirect users using short URLs
- Fully serverless architecture
- Uses AWS managed services
- Beginner-friendly cloud project

---

# 🛠️ Tech Stack

- Node.js
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB

---

# 📌 Architecture

```text
User
  ↓
API Gateway
  ↓
POST /shorten ──→ shorten-url Lambda ──→ DynamoDB
  ↓
GET /{shortId} ─→ redirect-url Lambda ─→ DynamoDB


---

# 📸 Project Screenshots

## API Gateway Overview

![API Gateway](images/gatewayapi.png)

---

## API Gateway Routes

![API Gateway Routes](images/apigateway_route.png)

---

## API Gateway Stages

![API Gateway Stages](images/apigateway_stages.png)

---

## DynamoDB Table

![DynamoDB](images/dynamodb.png)

---

## IAM Roles

![IAM Roles](images/iam_roles.png)

---

## URL Shortener Lambda Function

![Shorten Lambda](images/lambda_serverless_url.png)

---

## Redirect Lambda Function

![Redirect Lambda](images/lambda_redirect_function.png)

---
