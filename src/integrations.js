const AWS = require('aws-sdk');
const { shopifyApi, LATEST_API_VERSION } = require('@shopify/shopify-api');
const ExampleCRM = require('@examplecrm/sdk');
const { listLegacyAzureAdUsers } = require('./identity-sync');

// AWS appears in source and config: inventory it as one vendor integration.
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
const shopify = shopifyApi({ apiVersion: '2026-04' });
const googlePlacesLegacyUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const exampleCrm = new ExampleCRM.Client({ region: 'us' });
module.exports = {
  s3,
  sqs,
  shopify,
  googlePlacesLegacyUrl,
  exampleCrm,
  listLegacyAzureAdUsers,
  LATEST_API_VERSION
};
