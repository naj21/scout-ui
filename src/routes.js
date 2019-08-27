import React from 'react';
import { Route } from 'react-router-dom';
import Countries from './Countries';
import CountryList from './Countries/components/CountryList';
import CountryDetails from './Countries/components/CountryDetails';
import NotFound from './Countries/components/NotFound';

export default [
    <Route 
        key='home'
        path='/'
        exact
        component={Countries}
    />,
    <Route 
        key='countries'
        path='/countries'
        exact
        component={CountryList}
    />,
    <Route 
        key='country'
        path='/countries/:code'
        component={CountryDetails}
    />,
    <Route
        key="404"
        path="/404"
        component={NotFound}
    />,
    <Route
        key="404"
        path="*"
        exact
        component={NotFound}
    />
]