import React from 'react';
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
    );
  }
}

export default createForm()(FormAgentLogin)

