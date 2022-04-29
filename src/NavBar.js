import React from 'react';
import { getHeaders } from './utils';

class NavBar extends React.Component {  

    constructor(props) {
        super(props);
        // constructor logic
        console.log('NavBar component created');
        this.state = {
            profile: null
        };
        this.fetchProfile = this.fetchProfile.bind(this)
    }

    componentDidMount() {
        // fetch posts
        console.log('NavBar component mounted');
        this.fetchProfile()
    }
    fetchProfile(){
        fetch('api/profile', {
            headers:getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ profile: data });
        })
    }

    render () {
        if(!this.state.profile) {
            return (
                <nav className="main-nav">
                    <h1>{this.props.title}</h1>
                    <ul>   
                        <li><a href="/api">API Docs</a></li>
                        <li><span>Current user</span></li>
                        <li><a href="/logout">Sign out</a></li>
                    </ul> 
                </nav>       
            );
        }
        return (
            <nav className="main-nav">
                <h1>{this.props.title}</h1>
                <ul>   
                    <li><a href="/api">API Docs</a></li>
                    <li><span>{this.state.profile.username}</span></li>
                    <li><a href="/logout">Sign out</a></li>
                </ul> 
            </nav>       
        );
    }
}

export default NavBar;