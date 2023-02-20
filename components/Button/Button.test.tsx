import Button from './Button';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

const DUMMY_HANDLER = jest.fn();
const DUMMY_TEXT = 'FOO';
describe('Button', () => {
    it('renders a button with the correct text', () => {
        render(<Button text={DUMMY_TEXT} onClick={DUMMY_HANDLER} color={'blue'} disabled={false} />);
        expect(screen.getByText(DUMMY_TEXT)).toBeTruthy();
    });

    it('disables the button when disabled is true', () => {
        render(<Button text={DUMMY_TEXT} onClick={DUMMY_HANDLER} color={'blue'} disabled={true} />);
        fireEvent.click(screen.getByRole('button'));
        expect(DUMMY_HANDLER).not.toHaveBeenCalled();
    });

    it('calls the onClick handler when clicked', () => {
        render(<Button text={'Shuffle'} onClick={DUMMY_HANDLER} color={'blue'} disabled={false} />);
        fireEvent.click(screen.getByRole('button'));
        expect(DUMMY_HANDLER).toHaveBeenCalled();
    });
});
