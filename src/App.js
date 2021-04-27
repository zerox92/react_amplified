import AWSAppSyncClient, { buildSubscription } from 'aws-appsync';
import { Rehydrated, graphqlMutation } from 'aws-appsync-react';
import awsExports from './aws-exports';
import { ApolloProvider, graphql } from 'react-apollo';
import React, { Component } from 'react';
// import { listReactNativePureWebSockets } from './graphql/queries'
import gql from 'graphql-tag';

const client = new AWSAppSyncClient({
  url: awsExports.aws_appsync_graphqlEndpoint,
  region: awsExports.aws_appsync_region,
  auth: {
    type: awsExports.aws_appsync_authenticationType,
    apiKey: awsExports.aws_appsync_apiKey,
    // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  }
})

const listReactNativePureWebSockets = gql`
query listPureWebSockets {
listReactNativePureWebSockets {
  items {
    name
    id
  }
}
}
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Super</h4>
        <button onClick={executeQuery}> Execute Query </button>
      </div>
    );
  }
}

function executeQuery() {
  console.log("executing Query");
  const data = graphql(listReactNativePureWebSockets)(App);
  console.log(data);
}

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
)

export default WithProvider;
