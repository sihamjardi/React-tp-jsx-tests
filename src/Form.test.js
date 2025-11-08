import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';

test('affiche une erreur si le champ est vide', () => {
  render(<Form />);
  fireEvent.click(screen.getByText('Envoyer'));
  expect(screen.getByRole('alert')).toHaveTextContent('Le champ est requis');
});
