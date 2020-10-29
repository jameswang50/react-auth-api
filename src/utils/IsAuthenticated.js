// This is a HOC
import React from 'react';
import payload from './payload';
import {Redirect} from 'react-router-dom';

export default function(WrappedComponent){

    return function(props){
       return payload().isAuthenticated ? <WrappedComponent {...props} />
       : <Redirect to="/" />
    }
}