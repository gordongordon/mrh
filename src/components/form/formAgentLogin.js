import React from 'react';
<<<<<<< HEAD
import { List, InputItem, Button, Toast } from 'antd-mobile';

class FormAgentLogin extends React.Component {
  state = {
    hasError: false,
    value: '',
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter correct email address');
    }
  }
  onChange = (value) => {
    if (value.replace(	
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, '')) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        <List renderHeader={() => 'Agent Login'}>
          <InputItem
            type="email"
            placeholder="input your email"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >Email </InputItem>
          <Button primary >Login </Button>
        </List>
      </div>
=======
import {
  List, WhiteSpace, InputItem,
  Button,
  SegmentedControl,
  Checkbox,
  Switch,
  WingBlank
} from 'antd-mobile';
import { createForm } from 'rc-form';
import { MTR } from 'MTR';
import { PARTITION } from 'PARTITION';
import { HOWTOCONTACT } from 'HOWTOCONTACT';
import { DISTRICK } from 'DISTRICK';

import { Fb } from 'firebase-store';

import MobxStore from 'mobxStore';
import views from 'views';
import MrCard from '../mrui/MrCard'

class FormAgentLogin extends React.Component {

  constructor( props ){
    super( props );
    this.login = this.login.bind( this );
  }


  login = (e) => {
    const value = this.props.form.getFieldsValue();

    e.preventDefault();


  }

  render() {
    const { getFieldProps } = this.props.form;

    return (<div>
      <WingBlank/>
      <WhiteSpace />
      <List style={{ backgroundColor: 'white' }} className="picker-list">

      <InputItem
          {...getFieldProps('email', {
            initialValue: '',
          }) }
          type="text"
          placeholder="email"
          clear
        >Email</InputItem>
      </List>
      <Button
          onClick={() => {
            this.setState({
              type: 'text',
            });
          }}
        >
          Login
        </Button>
      <MrCard.LineText> or  </MrCard.LineText>
      <WhiteSpace />
       <Button type="primary" onClick={ () => goTo( views.mrHouse, store.app.params, store )}> SignUp</Button>
    <WhiteSpace />
    </div>
>>>>>>> f4aa1ca34efb3810cc421c767067e619fdb49aa8
    );
  }
}

<<<<<<< HEAD
export default FormAgentLogin;
=======
export default createForm()(FormAgentLogin)
>>>>>>> f4aa1ca34efb3810cc421c767067e619fdb49aa8

