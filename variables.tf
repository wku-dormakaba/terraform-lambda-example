# Input variable definitions

variable "aws_region" {
  description = "AWS region for all resources."

  type    = string
  default = "ap-southeast-1"
}

variable "aws_profile" {

  type    = string
  default = "<AWS profile>"
}

variable "lambda_function_name" {

  type    = string
  default = "TestLambda"
}