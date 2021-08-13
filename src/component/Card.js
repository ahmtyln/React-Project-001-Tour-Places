import React, { Component } from "react";

class Card extends Component {
    render() {
        const { title, desc, image } = this.props;
        return (
            <div className="container">
                <div className="container-div">
                    <p className="title">{title}</p>
                    <img src={image} alt="" />
                    <p className="desc">{desc}</p>
                </div>
            </div>
        )
    }
}

export default Card;