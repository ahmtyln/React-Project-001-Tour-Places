import React, { Component } from "react"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-ul">
                    <li className="navbar-item"><a href="#">ABOUT US</a></li>
                    <li className="navbar-item"><a href="#">FOR YOU</a></li>
                    <li className="navbar-item"><a href="#">SERVİCES</a></li>
                    <li className="navbar-item"><a href="#">BLOG</a></li>
                    <li className="navbar-item"><a href="#">VLOG</a></li>
                    <li className="navbar-item"><a href="#">CONTACT</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;