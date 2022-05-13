## Introduction

This repo contains the basic setup for deploying an AWS Lambda with Terraform.

## Pre-requisites
* AWS profile
* Terraform CLI
* AWS CLI

## Setup
1. At project root folder level, do a `terraform init`.
1. Modify the values at `variables.tf` accordingly.
1. Refactor the lambda code at `lambda/index.js`. `npm install` etc.
1. `terraform apply`
1. Rinse and repeat steps 3-4

## Invoke Lambda
Using AWS CLI,
````
aws lambda invoke --function-name=$(terraform output -raw function_name) --profile=<AWS profile> tmp/response.json
```` 
