import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import SignUpScreen from "../screens/SignUpScreen";

const SignUpStack = createStackNavigator({
  SignUp: SignUpScreen
});

export default createBottomTabNavigator({
  SignUpStack
});
