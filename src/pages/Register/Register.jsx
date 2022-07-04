import React from 'react';
import { Form, Input, Label } from '../../components/Form';
import { Button } from '../../components';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log('register');
  }

  return (
    <Form>
      <Label elementId='username-input' text='username:' />
      <Input placeholder='enter username' />
      <Label elementId='email-input' text='email:' />
      <Input placeholder='enter your email' />
      <Label elementId='password-input' text='password:' />
      <Input placeholder='enter password' type='password' />
      <Button text='register' onClick={() => handleRegister} />
    </Form>
  );
};

export default Register;