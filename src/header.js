import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import './website_v2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import computer from './assets/computer.png'
import basketball from './assets/basketball.png'

class header extends Component {
    state = {
        lines: [' I am a Computer Science major at Vanderbilt University',
        ' Current passions are in full stack web development ', ' and watching basketball ',
        ' Feel free to learn more about me and connect at the links below!'],
        intro: 'Hey I\'m William Zhao',
    }

    handleArrow = () => {
        setTimeout(() => {
            document.getElementById("downarrow").style.visibility = "visible"
            document.getElementById("darrow-icon").style.webkitAnimation = "fadein 2s"
        }, 8000)

    }
    render(){
        let comp = <img className="emojis" src={computer}/>
        let bball = <img className="emojis" src={basketball} />
        // if(this.state.arrow) {
        //     icon = <FontAwesomeIcon icon="angle-down" />;
        // }
        return(
            <div>
                <Typing hideCursor="true" speed={50}>
                    <div id='intro'>
                        <span>{this.state.intro}</span>
                    </div>
                    <div className='typer'>
                        <Typing.Delay ms={100}/>
                        <Typing.Speed ms={12} />
                        <FontAwesomeIcon icon="hand-point-right"/> 
                        {this.state.lines[0]}
                    </div>
                    <div className='typer'>
                        <Typing.Delay ms={150}/>
                        <FontAwesomeIcon icon="hand-point-right"/> 
                        {this.state.lines[1]} {comp} 
                        {this.state.lines[2]} {bball} 
                    </div>
                    <div className='typer'>
                        <Typing.Delay ms={200}/>
                        <FontAwesomeIcon icon="hand-point-right"/> 
                        {this.state.lines[3]}
                    </div>
                </Typing>

                <div id="downarrow">
                    {this.handleArrow()}
                    <FontAwesomeIcon id="darrow-icon" icon="angle-down" />
                </div>
            </div>
        )
    }
}

export default header;