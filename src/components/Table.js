import Proptypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
        </thead>
        { expenses.map((expense) => {
          const {
            description,
            tag,
            method,
            value,
            currency,
            id,
            exchangeRates,
          } = expense;
          return (
            <tbody key={ id }>
              <tr className="table-primary">
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ Number(value).toFixed(2) }</td>
                <td>{ exchangeRates[currency].name }</td>
                <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{ (value * exchangeRates[currency].ask).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button type="button" className="btn btn-secondary">Editar</button>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => dispatch(removeItem(id)) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: Proptypes.arrayOf(Proptypes.objectOf).isRequired,
  dispatch: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
