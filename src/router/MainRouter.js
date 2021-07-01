import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './MainRouter.module.css';
import Second from '../componenets/Second';
import SignInForm from '../forms/SignInForm';

import Admin from '../componenets/Admin';

class MainRouter extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        console.log('auth', this.props.auth.token.length)
        return (
            <BrowserRouter>
            <div className = {styles.main}>
                <nav>
                    <ul className={styles.header}>
                        <li>
                            <Link to="/" className={styles.navWrapper}><span className={styles.forLink}>Main</span></Link>
                        </li><br />
                        <li>
                            <Link to="/second" className={styles.navWrapper}><span className={styles.forLink}>Second</span></Link>
                        </li><br />
                
                    </ul>
                    <Switch>
                                <Route  path="/second">
                                  <Second />
                               </Route>
                            {this.props.auth.token.length === 0
                                ?
                                <Route path="/">
                                    <SignInForm />
                                </Route>
                                :
                                <Route path="/">
                                    <Admin />
                                </Route>
                            }
                    </Switch>
                </nav>
            </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(MainRouter)