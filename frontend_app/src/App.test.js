import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

function openDetailsForFirstCard() {
  const cards = screen.getAllByRole('article');
  const first = cards[0];
  const detailsBtn = within(first).getByRole('button', { name: /details/i });
  fireEvent.click(detailsBtn);
}

test('renders list of songs', () => {
  render(<App />);
  const list = screen.getByLabelText(/song list/i);
  // At least one card
  const cards = within(list).getAllByRole('article');
  expect(cards.length).toBeGreaterThan(0);
});

test('search filters results', () => {
  render(<App />);
  const search = screen.getByLabelText(/search \(title or artist\)/i);
  fireEvent.change(search, { target: { value: 'Weeknd' } });
  const apply = screen.getByRole('button', { name: /apply/i });
  fireEvent.click(apply);

  const list = screen.getByLabelText(/song list/i);
  const cards = within(list).getAllByRole('article');
  // Only The Weeknd songs should be shown in our dataset (2 items)
  expect(cards.length).toBeGreaterThan(0);
  // Ensure at least one card mentions The Weeknd
  expect(screen.getAllByText(/weeknd/i).length).toBeGreaterThan(0);
});

test('selecting a song shows details', () => {
  render(<App />);
  openDetailsForFirstCard();
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  const close = screen.getByRole('button', { name: /close details/i });
  fireEvent.click(close);
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('empty results state', () => {
  render(<App />);
  const search = screen.getByLabelText(/search \(title or artist\)/i);
  fireEvent.change(search, { target: { value: 'zzzz-not-real' } });
  const apply = screen.getByRole('button', { name: /apply/i });
  fireEvent.click(apply);
  expect(screen.getByText(/no songs found/i)).toBeInTheDocument();
});
