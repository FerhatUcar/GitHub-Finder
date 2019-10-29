import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class UserItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 'id',
            login: 'mojombo',
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        }
    }

    render() {
        return (
            <div className="card text-center">
                <img
                    src={this.state.avatar_url}
                    alt={this.state.id}
                    className="round-img"
                    style={{width: "60px"}}
                />
                <h3>{this.state.login}</h3>

                <div>
                    <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">
                        More
                    </a>
                </div>
            </div>
        );
    }
}

UserItem.propTypes = {};

export default UserItem;
