import React from 'react';
import { CardType } from '../../types';

interface CardProps {
    card: CardType;
    revealed: boolean;
    index: number;
    style?: React.CSSProperties;
}

const Card = ({ card, revealed, style }: CardProps) => {
    const { suit, rank } = card;
    let symbol = '';

    switch (suit) {
        case 'Hearts':
            symbol = '❤️';
            break;
        case 'Diamonds':
            symbol = '♦️';
            break;
        case 'Clubs':
            symbol = '♣️';
            break;
        case 'Spades':
            symbol = '♠️';
            break;
    }

    const revealedCardContent = (
        <div className="text-xl font-bold flex flex-col text-center justify-between  h-full">
            <div className="self-start">
                {rank}
                {symbol}
            </div>

            <div className="text-6xl">{symbol}</div>

            <div className="self-end">
                {symbol}
                {rank}
            </div>
        </div>
    );
    const hiddenCardContent = <div></div>;

    return (
        <div
            style={style && style}
            className={` p-2 h-[250px] w-[150px] bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-100   ${
                revealed ? `bg-slate-50` : `bg-[url('/card-background.jpg')]`
            } bg-cover absolute
            ${suit === 'Hearts' || suit === 'Diamonds' ? 'text-red-500' : 'text-black'}`}
        >
            {revealed ? revealedCardContent : hiddenCardContent}
        </div>
    );
};

export default Card;
