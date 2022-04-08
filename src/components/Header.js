import React from "react";
import './Header.css'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://i.pinimg.com/originals/5e/ac/30/5eac309c76e9d7f6d764ff3a0cc32335.jpg"></img>
                </a>

            </div>
        </header>
    )
}