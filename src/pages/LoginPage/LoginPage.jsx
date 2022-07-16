import React from 'react';
import { Form, Input, Label } from '../../components/Form';
import { Button } from '../../components';
import './loginPage.scss';

const LoginPage = () => {
  return (
    <div className='login'>
      <Form>
        <Label elementId='username-input' text='username:' />
        <Input placeholder='enter username' />
        <Label elementId='password-input' text='password:' />
        <Input placeholder='enter password' type='password' />
        <Button text='login' />
      </Form>
    </div>
  );
};

export default LoginPage;
