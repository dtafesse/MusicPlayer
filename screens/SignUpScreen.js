import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import {
  Card,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";

import constants from "../constants/Layout";
import colors from "../constants/Colors";

class SignUpScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <Card style={{ flex: 1 }} title='Sign Up!'>
          <View style={styles.formContainer}>
            <FormLabel>Email</FormLabel>
            <FormInput style={styles.input} />
            <FormLabel>Password</FormLabel>
            <FormInput textContentType='password' secureTextEntry />
            <FormLabel>Confirm Password</FormLabel>
            <FormInput
              style={styles.input}
              textContentType='password'
              secureTextEntry
            />
          </View>
          <Button raised backgroundColor={colors.primary} title='Sign Up' />
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
  },
  formContainer: {
    height: 0.4 * constants.window.height,
    width: 0.8 * constants.window.width
  },
  input: { color: colors.text }
});

export default SignUpScreen;
