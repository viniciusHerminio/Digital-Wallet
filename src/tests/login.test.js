import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testes referentes a página de Login', () => {
  test('Se a página conta com dois campos de inputs e um botão', () => {
    const { getByRole, getByTestId } = renderWithRouterAndRedux(<App />);
    const inputEmail = getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    const inputPassword = getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
    const btnEntrar = getByRole('button', { name: 'Entrar' });
    expect(btnEntrar).toBeInTheDocument();
  });
  test('Se o botão é habilitado ao preencher corretamente os inputs', () => {
    const { getByRole, getByTestId } = renderWithRouterAndRedux(<App />);
    const inputPassword = getByTestId('password-input');
    const inputEmail = getByTestId('email-input');
    const btnEntrar = getByRole('button', { name: 'Entrar' });
    expect(btnEntrar).toBeDisabled();
    userEvent.type(inputEmail, 'exemplo@hotmail.com');
    userEvent.type(inputPassword, '123456');
    expect(btnEntrar).toBeEnabled();
  });
  test('Se o botão é habilitado ao preencher corretamente os inputs', () => {
    const { getByRole, getByTestId, history } = renderWithRouterAndRedux(<App />);
    const inputPassword = getByTestId('password-input');
    const inputEmail = getByTestId('email-input');
    const btnEntrar = getByRole('button', { name: 'Entrar' });
    userEvent.type(inputEmail, 'exemplo@hotmail.com');
    userEvent.type(inputPassword, '123456');
    userEvent.click(btnEntrar);
    expect(history.location.pathname).toBe('/carteira');
  });
});
