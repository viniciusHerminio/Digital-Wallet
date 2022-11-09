import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  valueAtt = () => {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      return Number('0.00').toFixed(2);
    }
    const result = expenses.reduce((prev, curr) => {
      const { exchangeRates, currency } = curr;
      const price = exchangeRates[currency];
      const { ask } = price;
      const valueSelect = Number(curr.value) * Number(ask);
      const prevNumber = parseFloat(prev);
      const total = (valueSelect + prevNumber).toFixed(2);
      return (total);
    }, 0);
    return result;
  };

  render() {
    const { email, currency, isFetching } = this.props;
    return (
      <div className="d-flex justify-content-around p-4 bg-light">
        <h5 data-testid="email-field">
          Email:
          {' '}
          { email }
        </h5>
        <div className="d-flex">
          { !isFetching
            ? <h5 data-testid="total-field">{ this.valueAtt() }</h5>
            : <span>loading...</span> }

          <h5 data-testid="header-currency-field">
            { currency }
          </h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
  value: globalState.wallet.value,
  currency: globalState.wallet.currency,
  expenses: globalState.wallet.expenses,
  isFetching: globalState.wallet.isFetching,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
