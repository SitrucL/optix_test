import Head from 'next/head';
import { useState } from 'react';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import Deck from '../components/Deck/Deck';
import { Rank, Suit, CardType } from '../types';

const suits: Suit[] = [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades];
const rank: Rank[] = [
    Rank.Ace,
    Rank.Two,
    Rank.Three,
    Rank.Four,
    Rank.Five,
    Rank.Six,
    Rank.Seven,
    Rank.Eight,
    Rank.Nine,
    Rank.Ten,
    Rank.Jack,
    Rank.Queen,
    Rank.King,
];

const createDeck = () => {
    const deck: CardType[] = [];

    suits.forEach((suit) => {
        rank.forEach((rank) => {
            deck.push({ suit, rank });
        });
    });

    return deck;
};
const initialDeck = createDeck();

export default function Home() {
    const [deck, setDeck] = useState(initialDeck);
    const [dealtCard, setDealtCard] = useState<CardType>();
    const [revealAll, setRevealAll] = useState(false);

    const handleReset = () => {
        setDeck(initialDeck);
        setDealtCard(undefined);
        setRevealAll(false);
    };

    const handleShuffle = () => {
        const array = [...deck];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setDeck(array);
        setRevealAll(true);
    };

    // function to handle when the Deal button is clicked
    const handleDealCard = () => {
        const newDeck = [...deck];
        const dealtCard = newDeck.pop();
        setRevealAll(false);

        //TODO: handle when deck is empty
        setDeck(newDeck);
        if (dealtCard) setDealtCard(dealtCard);
    };
    return (
        <>
            <Head>
                <title>Optix Test</title>
                <meta name="description" content="Tech test for Optix" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex max-w-5xl mx-auto flex-col items-center justify-start py-2 min-h-screen bg-red-300">
                <div>Remaining Card Count: {deck.length}</div>

                <div>
                    <Button text={'Shuffle'} onClick={handleShuffle} color={'blue'} disabled={deck.length != 52} />
                    <Button text={'Restart'} onClick={handleReset} color={'red'} />
                    <Button text={'Deal'} onClick={handleDealCard} color={'green'} />
                </div>

                <Deck deck={deck} revealed={revealAll} />
                <div className="mt-96">{dealtCard && <Card card={dealtCard} revealed={true} index={0} position={'block'} />}</div>
            </div>
        </>
    );
}
