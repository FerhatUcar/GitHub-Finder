// all actions here, were want to fetch data
import React, {useReducer, useState} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
} from '../types';


let githubClientId;
let githubClientSecret;

// check if it is a production mode or else get global variables
if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}


const GithubState = props => {
    // eslint-disable-next-line
    const [loading, showLoading] = useState(false);
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Github users
    const searchUsers = async text => {
        showLoading();

        // get users data
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
        );

        // dispatch to the reducer
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    };


    // Get single Github user
    const getUser = async (username) => {
        showLoading();

        // get users data
        const res = await axios.get(
            `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
        );

        // dispatch to the reducer
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    };

    // Get user repos
    const getUserRepos = async (username) => {
        showLoading();

        // get users data
        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
        );

        // dispatch to the reducer
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    };

    // Clear users from state
    const clearUsers = () => dispatch({type: CLEAR_USERS});

    // Set loading
    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                getUser,
                clearUsers,
                setLoading,
                getUserRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )};

export default GithubState;


