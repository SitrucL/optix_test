import React from 'react';
import { CardType } from '../../types';
import Card from '../Card/Card';

interface DeckProps {
    deck: CardType[];
    revealed?: boolean;
}

const Deck = ({ deck, revealed }: DeckProps) => {
    return (
        <div className="mt-28 self-start max-w-5xl">
            {deck.map((card, index) => (
                <Card key={index} index={index} card={card} revealed={revealed ? true : false} position={`absolute`} />
            ))}
        </div>
    );
};

export default Deck;
