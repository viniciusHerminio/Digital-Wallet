import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses, currency } = this.props;
    console.log(expenses);
    return (
      <div className="d-flex justify-content-around p-4 bg-light">
        <h5 data-testid="email-field">
          Email:
          {' '}
          { email }
        </h5>
        <div className="d-flex">
          <h5 data-testid="total-field">
            { expenses.length === 0 ? 0 : expenses
              .reduce((prev, curr) => {
                const price = curr.exchangeRates[curr.currency].ask;
                const valueSelect = Number(curr.value) * Number(price);
                const prevNumber = parseFloat(prev);
                const total = (valueSelect + prevNumber).toFixed(2);
                return (total);
              }, 0) }
          </h5>
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
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
