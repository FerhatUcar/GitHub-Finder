import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');

    // get the value from the input
    const onChange = (e): void => setText(e.target.value);

    // submit the current value
    const onSubmit = (e): void => {
        e.preventDefault();

        if (text === '') alertContext.setAlert('Please enter text', 'danger');

        githubContext.searchUsers(text).then();
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
                {githubContext.users.length > 0 && (
                    <button
                        className="btn btn-light btn-block"
                        onClick={githubContext.clearUsers}
                    >Clear</button>
                )}
            </form>
        </div>
    );
};

export default Search;
