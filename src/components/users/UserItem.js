import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const UserItem = ({user: {login, avatar_url, html_url, id}}) => {

    return (
        <div className="card card__space--btn text-center">
            <img
                src={avatar_url}
                alt={id}
                className="round-img"
                style={{width: "60px"}}
            />
            <h3>{login}</h3>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm">More</Link>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
