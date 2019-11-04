import React, {Component} from 'react';
import PropTypes from "prop-types";

class Search extends Component {
    state = {
        text: ''
    };

    // type checking
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    // get the value from the input
    onChange = (e): void => this.setState({[e.target.name]: e.target.value});

    // submit the current value
    onSubmit = (e): void => {
        e.preventDefault();

        if (this.state.text === '') {
            this.props.setAlert('Please enter text', 'danger');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''})
        }
    };

    render() {
        const {showClear, clearUsers} = this.props;

        return (
            <div className="search__box">
                <div className="card card__space">
                    <h1>Search for Github users</h1>
                    <p>Type the users name in the search box to get results</p>
                </div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        placeholder="Search" />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />
                    {showClear && (
                        <button
                            className="btn btn-light btn-block"
                            onClick={clearUsers}
                        >Clear</button>
                    )}
                </form>
            </div>
        );
    }
}

export default Search;
