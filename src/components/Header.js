import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    const total = expenses.reduce(
      (acc, { value, currency, exchangeRates }) => {
        const finalTotal = acc + value * exchangeRates[currency].ask;
        return finalTotal;
      },
      0,
    );
    return (
      <div>
        <p data-testid="email-field">
          Email:
          { userEmail }
        </p>
        <p data-testid="total-field">
          {total.toFixed(2)}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.objectOf(propTypes.string)).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.total,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
