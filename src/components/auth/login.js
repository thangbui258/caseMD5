import login from './login.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';

const NewComponent = function() {
        return (

            <div className="wrapper">
                <header className="header">
                    <a href="#" className="logo">
                        <svg aria-hidden="true" className="octicon octicon-mark-github" height={48} version="1.1"
                             viewBox="0 0 16 16" width={48}>
                            <path fillRule="evenodd"
                                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <h1>Sign in to GitHub</h1>
                </header>
                <form className="form">
                    <label htmlFor="user">
                        Username or email address
                        <input className="field" type="text" name="user" id="user" autofocus/>
                    </label>
                    <label htmlFor="password">
                        Password <span><a href="#">Forgot password?</a></span>
                        <input className="field" type="password" name="password" id="password"/>
                    </label>
                    <input className="button" type="submit" defaultValue="Sign in"/>
                </form>
                <div className="create-account">
                    <p>
                        New to GitHub? <a href="#" className="text-right">Create an account.</a>
                    </p>
                </div>
                <footer className="footer">
                    <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Contact Github</a></li>
                    </ul>
                </footer>
            </div>
        );
    }


export default NewComponent