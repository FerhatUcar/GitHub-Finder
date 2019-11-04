import React, {Component, Fragment} from 'react';
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class User extends Component {
    componentDidMount(): void {
        this.props.getUser(this.props.match.params.login).then();
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    };

    render() {
        const {
            name,
            avatar_url,
            company,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const {loading} = this.props;

        // show loader if the data is not been fetched
        if (loading) return <Spinner/>;

        return (
            <Fragment>
                <div className="card flex">
                    <div className="all-center">
                        <div>
                            <img
                                src={avatar_url}
                                alt={name}
                                className="round-img"
                                style={{width: "150px", marginRight: "1rem"}}
                            />
                            <h1>{name}</h1>
                            <p>
                                <strong>Location:</strong> {location}
                            </p>
                            {company &&
                            <Fragment>
                                <strong>Company:</strong> {company}
                            </Fragment>
                            }
                            <div>
                                <strong>Hireable:</strong> {' '}
                                {hireable ? (
                                    <i className="fas fa-check text-success" />
                                ) : (
                                    <i className="fas fa-times-circle text-danger" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="line"/>
                    <div>
                        {bio && (
                            <div className="my-1">
                                <h2>Bio</h2>
                                <p>{bio}</p>
                            </div>
                        )}

                        <ul>
                            <h2>Info</h2>
                            <li>
                                {blog &&
                                    <Fragment>
                                        <strong>Blog:</strong> {' '}
                                        <a target="_blank"
                                           rel="noopener noreferrer"
                                           href={blog}>{blog}</a>
                                    </Fragment>
                                }
                            </li>
                            <li>
                                {login &&
                                    <Fragment>
                                        <strong>Login:</strong> {login}
                                    </Fragment>
                                }
                            </li>
                        </ul>

                        <p><strong>Followers:</strong> {followers}</p>
                        <p><strong>Following:</strong> {following}</p>

                        <p><strong>Public Repos:</strong> {public_repos}</p>
                        <p><strong>Public Gists:</strong> {public_gists}</p>

                        <a href={html_url}
                           target="_blank"
                           className="btn btn-dark my-1"
                           rel="noopener noreferrer"
                        >Visit Github profile</a>
                    </div>
                </div>

                <Link to="/" className="btn btn-dark my-1">Back to search</Link>
            </Fragment>
        );
    }
}

export default User;
