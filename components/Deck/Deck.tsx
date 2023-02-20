import React from 'react';
import { CardType } from '../../types';
import Card from '../Card/Card';

interface DeckProps {
    deck: CardType[];
    revealed?: boolean;
}

const Deck = ({ deck, revealed }: DeckProps) => {
    return (
        <div className="mt-28 max-w-5xl relative flex justify-center">
            {deck.map((card, index) => (
                <Card
                    key={index}
                    index={index}
                    card={card}
                    revealed={revealed ? true : false}
                    style={{
                        transform: `rotateZ(${Math.floor(Math.random() * 31) - 15}deg)`,
                        zIndex: deck.length - index,
                    }}
                />
            ))}
        </div>
    );
};

export default Deck;
