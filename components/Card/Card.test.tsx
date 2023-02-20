import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { CardType, Rank, Suit } from '../../types';

const DUMMY_DATA: CardType = {
    suit: Suit.Diamonds,
    rank: Rank.Eight,
};
describe('Card', () => {
    it('renders a card with the correct suit and rank to the screen', () => {
        render(<Card card={DUMMY_DATA} revealed={true} />);
        expect(screen.getByText('♦️')).toBeTruthy();
        expect(screen.getAllByText(/8/i)).toBeTruthy();
    });

    it('renders a card with no content when revealed is false', () => {
        render(<Card card={DUMMY_DATA} revealed={false} />);
        expect(screen.queryByText('♦️')).toBeNull();
        expect(screen.queryAllByText(/8/i)).toHaveLength(0);
    });
});
