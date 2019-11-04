import React from 'react';

// type checking
import PropTypes from "prop-types";

const RepoItem = ({repo}) => {
    return (
        <div>
            <i className="fas fa-angle-right" /> {' '}
            <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>{repo.name.toUpperCase()}</a>
        </div>
    );
};

RepoItem.propType = {
    repos: PropTypes.object.isRequired
};

export default RepoItem;
