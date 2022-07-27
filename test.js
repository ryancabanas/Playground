const object = {
  version: '0',
  id: 'a309e823-553e-926e-64c1-c229204bb084',
  'detail-type': 'AWS API Call via CloudTrail',
  source: 'aws.cognito-idp',
  account: '631592774381',
  time: '2022-07-27T13:36:23Z',
  region: 'us-east-1',
  resources: [],
  detail: {
    eventVersion: '1.08',
    userIdentity: {
      type: 'AssumedRole',
      principalId:
        'AROAZGDO45LWT3KZEWHHR:GDS-Auth-Cognito-CognitoSigninTriggers-latest',
      arn: 'arn:aws:sts::631592774381:assumed-role/GDS-Auth-Latest-CognitoSigninTriggersFunctionRole-P9HN5BZPH5C7/GDS-Auth-Cognito-CognitoSigninTriggers-latest',
      accountId: '631592774381',
      accessKeyId: 'ASIAZGDO45LWVXQ4565F',
      sessionContext: {
        sessionIssuer: {
          type: 'Role',
          principalId: 'AROAZGDO45LWT3KZEWHHR',
          arn: 'arn:aws:iam::631592774381:role/GDS-Auth-Latest-CognitoSigninTriggersFunctionRole-P9HN5BZPH5C7',
          accountId: '631592774381',
          userName:
            'GDS-Auth-Latest-CognitoSigninTriggersFunctionRole-P9HN5BZPH5C7',
        },
        webIdFederationData: {},
        attributes: {
          creationDate: '2022-07-27T13:35:47Z',
          mfaAuthenticated: 'false',
        },
      },
    },
    eventTime: '2022-07-27T13:36:23Z',
    eventSource: 'cognito-idp.amazonaws.com',
    eventName: 'AdminUpdateUserAttributes',
    awsRegion: 'us-east-1',
    sourceIPAddress: '3.234.228.105',
    userAgent:
      'aws-sdk-nodejs/2.1083.0 linux/v16.15.0 exec-env/AWS_Lambda_nodejs16.x promise',
    requestParameters: {
      userPoolId: 'us-east-1_Oinkm94WT',
      username: 'HIDDEN_DUE_TO_SECURITY_REASONS',
      userAttributes: 'HIDDEN_DUE_TO_SECURITY_REASONS',
    },
    responseElements: null,
    additionalEventData: {
      sub: '838d1359-ce3a-4282-9f87-9584f783bf55',
    },
    requestID: 'a6b5ee9d-5175-448e-876e-80e0a6728fbd',
    eventID: '63e78be5-c08b-4498-9250-94664f4f9f52',
    readOnly: false,
    eventType: 'AwsApiCall',
    managementEvent: true,
    recipientAccountId: '631592774381',
    eventCategory: 'Management',
    tlsDetails: {
      tlsVersion: 'TLSv1.2',
      cipherSuite: 'ECDHE-RSA-AES128-GCM-SHA256',
      clientProvidedHostHeader: 'cognito-idp.us-east-1.amazonaws.com',
    },
  },
};

const jsonString = JSON.stringify(object).replaceAll('"', '\\"');
console.log(jsonString);