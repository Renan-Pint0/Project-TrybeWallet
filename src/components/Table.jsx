import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './Table.css';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <div className="tableContent">
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </div>
        <br />
        <div>
          {expenses.map((expense) => (
            <tbody key={ expense.id } className="tableValues">
              <tr>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>
                  { (expense.value * 1).toFixed(2) }
                </td>
                <td>{ expense.exchangeRates[expense.currency].name }</td>
                <td>{ (expense.exchangeRates[expense.currency].ask * 1).toFixed(2) }</td>
                <td>
                  {
                    (expense.exchangeRates[expense.currency].ask * expense.value)
                      .toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>
            </tbody>
          ))}
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: propTypes.arrayOf(propTypes.objectOf(propTypes.string)).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
