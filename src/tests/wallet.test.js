import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testes referentes a página da carteira', () => {
  const TOTAL_FIELD = 'total-field';
  test('Se a página conta com um header com o email e o loading do valor gasto', async () => {
    const {
      getByTestId,
      getByText,
      findByTestId,
      getByRole,
    } = renderWithRouterAndRedux(<Wallet />);
    const email = getByTestId('email-field');
    expect(email).toBeInTheDocument();
    const loading = getByText(/loading/i);
    expect(loading).toBeInTheDocument();
    await findByTestId(TOTAL_FIELD);
    const total = getByTestId(TOTAL_FIELD);
    expect(total).toBeInTheDocument();
    const btnAdd = getByRole('button', { name: 'Adicionar despesa' });
    const valor = getByTestId('value-input');
    const description = getByTestId('description-input');
    userEvent.type(valor, '20');
    userEvent.type(description, 'Teste');
    userEvent.click(btnAdd);
    const loading2 = getByText(/loading/i);
    expect(loading2).toBeInTheDocument();
    await findByTestId(TOTAL_FIELD);
    const total2 = getByTestId(TOTAL_FIELD);
    expect(total2).toBeInTheDocument();
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
});
