import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import fetchWalletData from '../redux/actions/fetchWalletAction';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrent } = this.props;
    fetchCurrent();
  }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div>
          <WalletForm />
        </div>
        <div>
          <Table />
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCurrent: propTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrent: () => dispatch(fetchWalletData()),
});

export default connect(null, mapDispatchToProps)(Wallet);
