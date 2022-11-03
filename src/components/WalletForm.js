import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionFetchCurrencyValue } from '../redux/actions/index';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetchCurrencyValue());
  }

  render() {
    const { currency } = this.props;
    return (
      <form className="d-flex justify-content-around bg-black align-items-center">
        <div className="p-3">
          <label
            htmlFor="value"
            className="text-white"
          >
            Valor:
            <input
              id="value"
              type="number"
              data-testid="value-input"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="coin"
            className="text-white"
          >
            Moeda:
            <select
              id="coin"
              data-testid="currency-input"
            >
              {currency.filter((cur) => cur !== 'USDT').map((curFiltered, index) => (
                <option key={ index } value={ curFiltered }>{ curFiltered }</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label
            htmlFor="payment"
            className="text-white"
          >
            Método de pagamento:
            <select
              id="payment"
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div>
          <label
            htmlFor="tag"
            className="text-white"
          >
            Tag:
            <select
              id="tag"
              data-testid="tag-input"
            >
              <option value="tag">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-white"
          >
            Descrição:
            <input
              id="description"
              data-testid="description-input"
            />
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filter: PropTypes.func,
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
};

WalletForm.defaultProps = {
  filter: PropTypes.func,
};

const mapStateToProps = (globalState) => ({
  currency: globalState.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
