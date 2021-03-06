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

    addUser = async (user) => {
        const response = await fetch('http://localhost:3001/add', {
            method: "POST",
            mode: "cors",
            body: user,
            headers: {
                "Content-Type": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const body = await response.json();
        return body;
    }

    findUser = async (email) => {
        const response = await fetch(`http://localhost:3001/find/${email}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const body = await response.json();
        return body;
    }

    checkEmail = async (email) => {
        const response = await fetch(`http://localhost:3001/check/${email}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const body = await response.json();
        return body;
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
        console.log(body);
        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    }

    onSignIn = async (googleUser) => {
        let profile = googleUser.getBasicProfile();
        let id_token = await googleUser.getAuthResponse().id_token;
        await this.authenicate(id_token);
        const email = profile.getEmail();
        let exist = await this.checkEmail(email);
        if(exist.bool) {
            const find = this.findUser(email);
        } else {
            const user = {
                "name": profile.getName(),
                "email": email
            }
            const add = this.addUser(JSON.stringify(user));
        }
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