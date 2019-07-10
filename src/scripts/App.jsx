/**
 * @format
 * @flow
 */

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import Login from "./components/Login";
import Home from "./components/Home/home";

const App = () => {
  const [count, setCount] = useState(0);
  const [actividad, setActividad] = useState(false);
  const mensaje = () => {
    setCount(0);
    Alert.alert("Reserter counter...");
  };
  const LoginApp = () => <Login setActividad={setActividad} />;
  const HomeApp = () => <Home />;
  //return actividad ? login : home;

  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/Home" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Login</Text>
          </Link>
        </View>
      </View>
      <Route exact path="/Home" component={HomeApp} />
      <Route exact path="/" component={LoginApp} />
    </NativeRouter>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});
export default App;
