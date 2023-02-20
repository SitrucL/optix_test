import React from 'react';
import { CardType } from '../../types';

interface CardProps {
    card: CardType;
    revealed: boolean;
    index: number;
    position: string;
}

const Card = ({ card, revealed, index, position }: CardProps) => {
    const { suit, rank } = card;

    const revealedCardContent = (
        <>
            <div>{suit}</div>
            <div>{rank}</div>
        </>
    );
    const hiddenCardContent = <div></div>;

    return (
        <div
            // style={{ marginLeft: `${index * 10}px` }}
            className={`max-w-sm p-12 h-[250px] w-[150px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ${position} ${
                revealed ? `bg-slate-50` : `bg-[url('/card-background.jpg')]`
            } bg-cover
            `}
        >
            {revealed ? revealedCardContent : hiddenCardContent}
        </div>
    );
};

export default Card;
