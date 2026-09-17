import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Todo App', () => {
    it('parāda sākuma lapu', () => {
        render(<App />);

        expect(screen.getByText('Mani Uzdevumi')).toBeTruthy();
    });

    it('var atvērt About lapu', () => {
        render(<App />);

        fireEvent.click(screen.getByRole('button', { name: 'About' }));

        expect(screen.getByRole('heading', { name: 'About' })).toBeTruthy();
    });

    it('var atvērt Contact lapu', () => {
        render(<App />);

        fireEvent.click(screen.getByRole('button', { name: 'Contact' }));

        expect(screen.getByRole('heading', { name: 'Contact' })).toBeTruthy();
    });

    it('var pievienot uzdevumu', async () => {
        render(<App />);

        const input = screen.getByPlaceholderText('Ieraksti uzdevumu...');

        fireEvent.change(input, {
            target: { value: 'Mācīties React' },
        });

        fireEvent.click(screen.getByRole('button', { name: 'Pievienot' }));

        await new Promise(resolve => setTimeout(resolve, 600));

        expect(screen.getByText('Mācīties React')).toBeTruthy();
    });
});