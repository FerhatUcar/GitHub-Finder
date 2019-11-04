import React, {Component, Fragment} from 'react';
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Repos from "../repos/Repos";

class User extends Component {
    componentDidMount(): void {
        this.props.getUser(this.props.match.params.login).then();
        this.props.getUserRepos(this.props.match.params.login).then();
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    };

    render() {
        const {
            name,
            avatar_url,
            company,
            location,
            bio,
            blog,
            email,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const {loading ,repos} = this.props;

        // show loader if the data is not been fetched
        if (loading) return <Spinner/>;

        return (
            <Fragment>
                <div className="card flex">
                    <div className="all-center card__space">
                        <div>
                            <img
                                src={avatar_url}
                                alt={name}
                                className="round-img"
                                style={{width: "75%"}}
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
                    <div className="bio card__space">
                        {bio && (
                            <div className="my-1">
                                <h2>Bio</h2>
                                <p>{bio}</p>
                            </div>
                        )}

                        <ul>
                            <h2>Info</h2>
                            <li>
                                {email &&
                                    <Fragment>
                                        <strong>Email:</strong> {email}
                                    </Fragment>
                                }
                            </li>
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
                            <li className="my-1">
                                <div className="badge badge-primary">Followers: {followers}</div>
                                <div className="badge badge-success">Following: {following}</div>
                                <div className="badge badge-light">Public Repos: {public_repos}</div>
                                <div className="badge badge-dark">Public Gists: {public_gists}</div>
                            </li>
                        </ul>

                        <h2>Repos</h2>
                        <Repos repos={repos} />

                        <a href={html_url}
                           target="_blank"
                           className="btn btn-dark my-1"
                           rel="noopener noreferrer"
                        >
                            <i className="fab fa-github" aria-hidden="true" /> {' '}
                            Visit Github profile
                        </a>
                    </div>
                </div>

                <Link to="/" className="btn btn-dark my-1">
                    <i className="fas fa-arrow-left" /> {' '}
                    Back to search
                </Link>
            </Fragment>
        );
    }
}

export default User;
