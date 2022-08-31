import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class WalletForm extends Component {
  render() {
    const { currency } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor :
          <input
            type="text"
            name="valor"
            id="valor"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="descrição">
          Descrição :
          <input
            type="text"
            name="descrição"
            id="descrição"
            data-testid="description-input"
          />
        </label>
        <br />
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            data-testid="currency-input"
          >
            {currency.map((currencyOption) => (
              <option key={ currencyOption }>{ currencyOption }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Categoria
          <select
            name="category"
            id="category"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currency: propTypes.arrayOf(propTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
