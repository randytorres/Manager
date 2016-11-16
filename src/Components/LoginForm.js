import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './Common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
      </CardSection>

      <Text style={styles.errorText}>
        {this.props.error}
      </Text>

      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
      </CardSection>
    </Card>
    );
  }
}

const mapStateToProp = ({ auth }) => {
  const { email, password, error } = auth;

  return { email, password, error };
};

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProp, {
   emailChanged, passwordChanged, loginUser
   })(LoginForm);
