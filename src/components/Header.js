import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, value, currency } = this.props;
    return (
      <div className="d-flex justify-content-around p-4 bg-light">
        <h5 data-testid="email-field">
          Email:
          {' '}
          { email }
        </h5>
        <h5 data-testid="total-field">
          Despesa Total: R$
          {' '}
          { value }
          {' '}
        </h5>
        <h5 data-testid="header-currency-field">
          { currency }
        </h5>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  email: globalState.user.email,
  value: globalState.wallet.value,
  currency: globalState.wallet.currency,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
