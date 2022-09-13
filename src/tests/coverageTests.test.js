import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import App from '../App';

describe('Testing the application to get 60% coverage', () => {
  test('Testing the login Page', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');
    const loginButton = screen.getByDisplayValue('Entrar');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    userEvent.type(emailInput, 'alguem@trybe.com');
    expect(emailInput).toHaveValue('alguem@trybe.com');
    expect(loginButton).toBeDisabled();
    userEvent.type(passwordInput, 'senhas');
    expect(passwordInput).toHaveValue('senhas');
    expect(loginButton).toBeEnabled();
    userEvent.click(loginButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
  test('Test the WalletForm compenent', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/carteira');
    const valueInput = screen.getByTestId('value-input');
    const submitButton = screen.getByRole('button');
    expect(valueInput).toBeInTheDocument();
    userEvent.type(valueInput, '2');
    expect(valueInput).toHaveDisplayValue('2');
    userEvent.click(submitButton);
    expect(valueInput).toHaveDisplayValue('');
  });
  test('Test the Table compenent', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/carteira');
    const valueInput = screen.getByTestId('value-input');
    const submitButton = screen.getByRole('button');
    expect(submitButton).toHaveTextContent(/Adicionar despesa/i);
    expect(valueInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    userEvent.click(submitButton);
  });
});
