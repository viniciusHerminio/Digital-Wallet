import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValidation: false,
      passwordValidation: false,
      email: '',
      password: '',
      btnEnabled: false,
    };
  }

  validationEmail = (email) => {
    const regEx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (regEx.test(email)) {
      this.setState({
        emailValidation: true,
      });
    } else {
      this.setState({
        emailValidation: false,
      });
    }
  };

  validationPassword = (password) => {
    const minCaracter = 5;
    if (password.length >= minCaracter) {
      this.setState({
        passwordValidation: true,
      });
    } else {
      this.setState({
        passwordValidation: false,
      });
    }
  };

  buttonEnabled = () => {
    const { passwordValidation, emailValidation } = this.state;
    if (passwordValidation && emailValidation === true) {
      this.setState({
        btnEnabled: true,
      });
    } else {
      this.setState({
        btnEnabled: false,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      const { email, password } = this.state;
      this.validationEmail(email);
      this.validationPassword(password);
      this.buttonEnabled();
    });
  };

  render() {
    const { email, password, btnEnabled } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ !btnEnabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Form;
