import React from 'react';
import { Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppRoutes from './routes'

//styles
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

export default App;
