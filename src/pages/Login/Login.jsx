import React from 'react';
import { Form, Input, Label } from '../../components/Form';
import { Button } from '../../components';
import './login.scss';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('login');
  }

  return (
    <div className='login'>
      <Form>
        <Label elementId='username-input' text='username:' />
        <Input placeholder='enter username' />
        <Label elementId='password-input' text='password:' />
        <Input placeholder='enter password' type='password' />
        <Button text='login' onClick={() => handleLogin} />
      </Form>
    </div>
  );
};

export default Login;