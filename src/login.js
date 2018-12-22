import React, { Component } from 'react';

class Login extends Component {
    componentDidMount(){
        console.log("mounted")
        window.gapi.signin2.render('g-signin2', {
          'scope': 'https://www.googleapis.com/auth/plus.login',
          'width': 200,
          'height': 50,
          'longtitle': true,
          'onsuccess': this.onSignIn
        });  

        window.gapi.load('auth2', function() {
            window.gapi.auth2.init();
        });
    }

    authenicate = async (id_token) => {
        const response = await fetch('http://localhost:3001/auth', {
            method: "POST",
            mode: "cors",
            body: id_token,
            headers: {
                "Content-Type": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    }

    onSignIn = async (googleUser) => {
        let profile = googleUser.getBasicProfile();
        let id_token = await googleUser.getAuthResponse().id_token;
        await this.authenicate(id_token);
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    render() {
        return (
            <div>
                <div id="g-signin2" data-onsuccess={this.onSignIn}></div>
                <h1>Should work and console log after print</h1>
            </div>
        )
    }
}

export default Login