import React from 'react';
import { Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { hot } from 'react-hot-loader';
import AppRoutes from './routes'

import './App.scss';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com'
});

const App = () => (
    <ApolloProvider client={client}>
        <Switch>
            {AppRoutes}
        </Switch>
    </ApolloProvider>
);

export default hot(module)(App);