import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, Dimensions } from "react-native";
import {
  Form,
  Item,
  Input,
  Label,
  Icon,
  Card,
  CardItem,
  Body
} from "native-base";

import constants from "../constants/Layout";

class SignUpScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <Card style={{ flex: 1 }}>
          <CardItem>
            <Body>
              <Form>
                <Item stackedLabel>
                  <Label>Username</Label>
                  <Icon active name='home' textContentType='emailAddress' />
                  <Input />
                </Item>
                <Item stackedLabel last>
                  <Label>Password</Label>
                  <Icon active name='home' />
                  <Input textContentType='password' secureTextEntry />
                </Item>
              </Form>
            </Body>
          </CardItem>
        </Card>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SignUpScreen;
