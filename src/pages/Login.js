import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../components/form';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      pageRedirect: false,
    };
  }

  render() {
    const { pageRedirect } = this.state;
    if (pageRedirect) {
      return <Redirect to="/carrinho" />;
    }
    return <Form />;
  }
}

export default Login;
