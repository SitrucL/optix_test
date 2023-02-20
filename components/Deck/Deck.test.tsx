import React from 'react';
import { render, screen } from '@testing-library/react';

import { CardType, Rank, Suit } from '../../types';
import Deck from './Deck';
import Card from '../Card/Card';

jest.mock('../Card/Card');

const DUMMY_DECK: CardType[] = [
    { suit: Suit.Diamonds, rank: Rank.Eight },
    { suit: Suit.Clubs, rank: Rank.Ace },
    { suit: Suit.Spades, rank: Rank.Jack },
];
describe('Deck', () => {
    it('renders a deck with the correct amount of cards to the screen', () => {
        render(<Deck deck={DUMMY_DECK} />);
        expect(Card).toHaveBeenCalledTimes(DUMMY_DECK.length);
    });
    it('correctly passes the revealed prop to each card', () => {
        render(<Deck deck={DUMMY_DECK} revealed={true} />);
        expect(Card).toHaveBeenNthCalledWith(1, { card: DUMMY_DECK[0], revealed: true, style: expect.any(Object) }, {});
        expect(Card).toHaveBeenNthCalledWith(2, { card: DUMMY_DECK[1], revealed: true, style: expect.any(Object) }, {});
        expect(Card).toHaveBeenNthCalledWith(3, { card: DUMMY_DECK[2], revealed: true, style: expect.any(Object) }, {});
    });
});
