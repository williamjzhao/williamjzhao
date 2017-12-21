import React, { Component } from 'react';
import './style.css';
import ReactDOM from 'react-dom';

let FontAwesome = require('react-fontawesome');

class App extends Component {

  render() {
		return (
      <div className="App">
        <header className="name-header">
					<link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:300,400,500,600" rel="stylesheet"/>
          <h1 className="name-title">Hey! I'm William Zhao.</h1>
        </header>
        <body>
          <p className="intro">
            Connect with or learn more about me below
          </p>
          <div className="icon-container">
            <a href={"https://www.github.com/williamjzhao"}>
              <img className="github-icon" src={"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"} alt={'github'}/>
            </a>
            <a href={"https://www.linkedin.com/in/williamjzhao"}>
              <img className="linkedin-icon" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png'}
                   alt={'linkedin'}/>
            </a>
            <a href={"https://www.instagram.com/wzhao1"}>
              <img className="instagram-icon" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2000px-Instagram_logo_2016.svg.png"}
                   alt={"instagram"}/>
            </a>
            <a href={"https://drive.google.com/file/d/1AAODUwqiHghmOLazl6QJYDnvUeArs3hw/view?usp=sharing"}>
              <img className="resume-icon" src={"http://www.clker.com/cliparts/f/H/5/a/Q/y/text-file-icon-hi.png"} alt={"resume"}/>
            </a>

            <a href={"mailto:william.zhao@vanderbilt.edu"}>
              <img className="email-icon" src={"http://pngimages.net/sites/default/files/mail-png-image-71391.png"} alt={"email"}/>
            </a>
						<FontAwesome
							className='super-crazy-colors'
							name='rocket'
							size='5x'
							spin
							style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
						/>
          </div>
        </body>
      </div>
    );
  }
}

class Button extends Component{
  render() {
		return (
			<div>
				<button>{this.props.ref}</button>
			</div>
		)
	}
}


export default App;
