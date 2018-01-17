# Apex Terraform with proxy starter

Get up and running on AWS API Gateway. This code contains the basic Terraform configuration for an API Gateway instance fronting a lambda proxy

## Setup

1. [Install Apex](http://apex.run/#installation)
1. [Install Terraform](https://www.terraform.io/intro/getting-started/install.html)
1. Clone this rope and cd to its root.
1. Set up your AWS credentials in your `~/.aws` directory
1. Run `apex init` and fill in the appropriate info
1. Run `apex deploy`
1. Update the variables in `infrastructure/variables.tf` with the appropriate info
1. Run `apex infra plan`
1. If that went okay, run `apex infra apply`

If everything went well you should have an API gateway instance with one resource `{proxy+}` that has the `ANY` method attached to it.
