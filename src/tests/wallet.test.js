import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';

describe('Testes referentes a página da carteira', () => {
  test('Se a página conta com um header com o email e o valor gasto', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Wallet />);
    const email = getByTestId('email-field');
    expect(email).toBeInTheDocument();
    const total = getByTestId('total-field');
    expect(total).toBeInTheDocument();
  });
  test('Se a página conta com um formulario', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Wallet />);
    const valor = getByTestId('value-input');
    expect(valor).toBeInTheDocument();
    const currency = getByTestId('currency-input');
    expect(currency).toBeInTheDocument();
    const method = getByTestId('method-input');
    expect(method).toBeInTheDocument();
    const tag = getByTestId('tag-input');
    expect(tag).toBeInTheDocument();
    const description = getByTestId('description-input');
    expect(description).toBeInTheDocument();
  });
  test('Se o valor total é alterado e os inputs de valor e descrição são limpos ao adicionar a despesa', async () => {
    globalThis.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    const exchangeRatesValues = mockData.USD.ask;
    const expectedValue = (20 * exchangeRatesValues).toFixed(2);
    const { getByTestId, getByRole, findByTestId } = renderWithRouterAndRedux(<Wallet />);
    const valor = getByTestId('value-input');
    const description = getByTestId('description-input');
    const btnAdd = getByRole('button', { name: 'Adicionar despesa' });
    userEvent.type(valor, '20');
    userEvent.type(description, 'Teste');
    userEvent.click(btnAdd);
    const total = await findByTestId('total-field');
    expect(valor).toHaveTextContent('');
    expect(description).toHaveTextContent('');
    expect(global.fetch).toHaveBeenCalled();
    expect(total).toHaveTextContent(expectedValue);
  });
});
