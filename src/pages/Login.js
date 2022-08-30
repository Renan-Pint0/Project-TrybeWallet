import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import addEmail from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputUserEmail: '',
      inputUserPassword: '',
      disabled: true,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateButton());
  }

  handleSubmit() {
    const { inputUserEmail } = this.state;
    const { addEmail: email } = this.props;
    email(inputUserEmail);
  }

  validateButton() {
    const { inputUserPassword, inputUserEmail } = this.state;
    const validateEmail = inputUserEmail.includes('@') && inputUserEmail.endsWith('.com');
    const mLength = 6;
    const validatePassword = inputUserPassword.length >= mLength;
    if (validateEmail && validatePassword) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
    console.log(inputUserPassword.length);
  }

  render() {
    const { inputUserEmail, inputUserPassword, disabled } = this.state;
    return (
      <div>
        <form action="" method="get">
          <input
            type="email"
            placeholder="Digite seu email"
            name="inputUserEmail"
            data-testid="email-input"
            pattern=".+@globex\.com"
            value={ inputUserEmail }
            onChange={ this.handleChange }
          />
          <br />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
            name="inputUserPassword"
            value={ inputUserPassword }
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <input
              type="submit"
              value="Entrar"
              disabled={ disabled }
              onClick={ this.handleSubmit }
            />
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  addEmail: propTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addEmail: (inputUserEmail) => dispatch(addEmail(inputUserEmail)),
});

export default connect(null, mapDispatchToProps)(Login);
