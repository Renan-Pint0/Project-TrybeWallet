import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchWalletCurrencies } from '../redux/actions/fetchWalletAction';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (target) => {
    const { id, value, description, currency, method, tag } = this.state;
    target.preventDefault();
    this.setState({
      id: id + 1,
    });
    const { expenses } = this.props;
    const currencies = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    expenses(currencies);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencie } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor :
          <input
            type="number"
            name="value"
            id="value"
            value={ value }
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição :
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {currencie.map((currencyOption) => (
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
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <br />
        <button type="submit" onClick={ this.handleSubmit }>Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencie: propTypes.arrayOf(propTypes.string).isRequired,
  expenses: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencie: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (currencies) => dispatch(fetchWalletCurrencies(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
