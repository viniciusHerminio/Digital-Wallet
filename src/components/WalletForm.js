import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actionFetchCurrencyValue,
  infosSelected,
  valueSelected } from '../redux/actions/index';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      coin: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      id: 0,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetchCurrencyValue());
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addGlobalState = () => {
    const { value, coin, payment, tag, description, id } = this.state;
    const { dispatch, currencyValue } = this.props;
    dispatch(actionFetchCurrencyValue());
    this.setState({
      id: id + 1,
    }, () => {
      const infos = {
        id,
        value,
        coin,
        payment,
        tag,
        description,
        exchangeRates: currencyValue,
      };
      dispatch(infosSelected(infos));
      dispatch(valueSelected(Number(value)));
    });
    this.setState({
      value: '',
      description: '',
    });
  };

  /*  defineValue = () => {
    const { expenses, dispatch } = this.props;
    const { value, id } = this.state;
    const response = expenses[id];
    console.log();
    const { coin } = response;
    const options = response.exchangeRates;
    const result = Object.entries(options).find((option) => option[0] === coin);
    const sum = ((value * result[1].ask).toFixed(2));
    dispatch(valueSelected(Number(sum)));
  }; */

  /*   defineValue = () => {
    const { expenses, dispatch } = this.props;
    const { value, id } = this.state;
    const response = expenses.map((expense) => {
      const { coin } = expense;
      const options = expense.exchangeRates;
      const result = Object.entries(options)
        .find((option) => option[0] === coin);
      const sum = ((value * result[1].ask).toFixed(2));
      dispatch(valueSelected(Number(sum)));
    });
    return response;
  };
 */
  render() {
    const { value, coin, payment, tag, description } = this.state;
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
              name="value"
              type="number"
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
              name="coin"
              value={ coin }
            >
              {currency.map((curFiltered, index) => (
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
              onChange={ this.handleChange }
              value={ payment }
              name="payment"
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
              name="tag"
              onChange={ this.handleChange }
              value={ tag }
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
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => this.addGlobalState() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.defaultProps = {
  currencyValue: PropTypes.func,
};

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencyValue: PropTypes.func,
};

const mapStateToProps = (globalState) => ({
  currency: globalState.wallet.currencies,
  currencyValue: globalState.wallet.currencyValue,
  expenses: globalState.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
