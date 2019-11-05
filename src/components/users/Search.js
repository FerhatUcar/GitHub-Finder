import React, {useState} from 'react';
import PropTypes from "prop-types";

const Search = ({showClear, clearUsers, searchUsers, setAlert}) => {
    const [text, setText] = useState('');

    // get the value from the input
    const onChange = (e): void => setText(e.target.value);

    // submit the current value
    const onSubmit = (e): void => {
        e.preventDefault();

        if (text === '') setAlert('Please enter text', 'danger');

        searchUsers(text).then();
        setText('')
    };

    return (
        <div className="search__box">
            <div className="card card__space">
                <h1>Search for Github users</h1>
                <p>Type the users name in the search box to get results</p>
            </div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={onChange}
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
};

// type checking
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search;
