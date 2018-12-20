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
    }

    onSignIn = (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    render() {
        return (
            <div>
                <div class="g-signin2" data-onsuccess={this.onSignIn}></div>
                <h1>Should work and console log after print</h1>
            </div>
        )
    }
}

export default Login