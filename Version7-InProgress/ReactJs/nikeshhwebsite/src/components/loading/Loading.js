import React, { useEffect } from "react";
import './loading.css';

const Loading = () => {

    useEffect(() => {
        function consoleText(words, id, colors) {
            if(colors === undefined) {
                colors = ['#fff'];
            }
    
            var target = document.getElementById(id);
            target.setAttribute('style', 'color:' + colors[0]);
    
            var visible = true;
            var console_underscore = document.getElementById('console-underscore');
    
            var letterCount = 1;
            var x = 1;
            var waiting = false;
    
            window.setInterval(function() {
                if(letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = "";
                    window.setTimeout(function() {
                        var usedColor = colors.shift();
                        colors.push(usedColor);
                        var usedWord = words.shift();
                        words.push(usedWord);
                        x = 1;
                        target.setAttribute('style', 'color:' + colors[0]);
                        letterCount = 1;
                        waiting = false;
                    }, 1000);
                } else if(letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true;
                    window.setTimeout(function() {
                        x = -1;
                        letterCount += x;
                        waiting = false;
                    }, 1000);
                } else if(waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount);
                    letterCount += x;
                }
            }, 120);
    
            window.setInterval(function() {
                if(visible === true) {
                    console_underscore.className = 'console-underscore hidden';
                    visible = false;
                } else {
                    console_underscore.className = 'console-underscore';
                    visible = true;
                }
            }, 400);
        }
    
        consoleText(['Hello World.', 'Console Text', 'Made with Love'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);    
    }, []);

    return (
        <>
            <img src={"/assets/images/loading.gif"} alt="loading_animation" />
            <div>
                <h1 className="name" data-shadow="Nikeshh">Nikeshh</h1>
            </div>
            <div className="console-container">
                <span id="text"></span>
                <div className="console-underscore" id="console-underscore">
                    &#95;
                </div>
            </div>
            <div className="loading">
                <span style={{ "--i":1 }}>L</span>
                <span style={{ "--i":2 }}>o</span>
                <span style={{ "--i":3 }}>a</span>
                <span style={{ "--i":4 }}>d</span>
                <span style={{ "--i":5 }}>i</span>
                <span style={{ "--i":6 }}>n</span>
                <span style={{ "--i":7 }}>g</span>
                <span style={{ "--i":8 }}>.</span>
            </div>
            <h2 className="hey_shadows">hey</h2>
            <h1 className="always_be">
                <span>always be</span>
                <div className="message">
                    <div className="word1">close</div>
                    <div className="word2">code</div>
                    <div className="word3">creating</div>
                </div>
            </h1>
        </>
    );
}

export default Loading;