import React, { Component } from 'react'
import Card from './Card';

class Cards extends Component {
    render() {
        const {cards} = this.props;
        
        return (
            <div>
                {
                    cards.map(card => {
                        return(
                            <Card
                                key = {card.id}
                                title = {card.title}
                                desc = {card.desc}
                                image = {card.image}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Cards;