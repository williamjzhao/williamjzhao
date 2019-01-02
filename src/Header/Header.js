import React, { useState, useEffect } from 'react';

export function Header() {
    const [el, setEl] = useState('');
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const period = 2000;
    const [isDeleting, setIsDeleting] = useState(false);
    const [toRotate, setToRotate] = useState(
        ['I am a Computer Science major at Vanderbilt University',
        'Current passions are in full stack web development and the NBA',
        'Feel free to learn more and connect with me at the links below!']);
    const lineOne = ['Hey I\'m William Zhao'];

    async function tick(rotate){
        var i = loopNum % rotate.length;
        var fullText = rotate[i];

        if (isDeleting) {
            setText(fullText.substring(0, text.length - 1));
        } else {
            setText(fullText.substring(0, text.length + 1));
        }

        setEl('<span class="wrap">'+text+'</span>');

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (isDeleting) { delta /= 2; }

        if (!isDeleting && text === fullText) {
            delta = period;
            setIsDeleting(true);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    }

    useEffect(async () => {
        await tick(lineOne);
        await tick(toRotate);
        // INJECT CSS
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    })

    return(
        <div>
            {el}
        </div>
    )
};

export default Header;