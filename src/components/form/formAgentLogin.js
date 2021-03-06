import React from 'react';
import { List, InputItem, Button, Toast, WhiteSpace } from 'antd-mobile';
import MrCard from '../mrui/MrCard';
import {Login} from 'grommet-icons';

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
          <Button primary ><Login/> Login</Button>
        </List>
      <MrCard.LineText> or  </MrCard.LineText>
      <WhiteSpace />
       <Button type="primary" onClick={ () => goTo( views.mrHouse, store.app.params, store )}>SignUp</Button>
    <WhiteSpace />        
      </div>
    );
  }
}

export default FormAgentLogin;
