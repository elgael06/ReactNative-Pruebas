import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

const Login = ({ setActividad }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const Enviar = () => {
    consultar();
  };
  const consultar = () => {
    fetch(`http://192.168.4.200/login?nombre=${usuario}&pasword=${password}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(j =>
        j.json().then(res => {
          res == "OK"
            ? (() => {
                Alert.alert("Autenticado...");
                setActividad(true);
              })()
            : Alert.alert("Usuario/Contraseña No Valid@´s !!!");
        })
      )
      .catch(err => console.log("Error...", err));
  };

  return (
    <View style={{ flex: 1, stylos }}>
      <View
        style={{
          marginTop: 0,
          padding: 20,
          backgroundColor: "#4d86e8",
          borderBottomColor: "#6c95d9",
          borderBottomWidth: 1
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Login Usuarios</Text>
      </View>
      <View style={stylos}>
        <View style={{ marginTop: 40, stylos }} />
        <TextInput
          style={input}
          placeholder="Usuario"
          value={usuario}
          inlineImageLeft="users"
          onChangeText={text => setUsuario(text)}
        />
      </View>
      <View style={stylos}>
        <View style={{ stylos }} />
        <TextInput
          style={input}
          placeholder="Contraseña"
          value={password}
          secureTextEntry={true}
          inlineImageLeft="users"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={Enviar}>
        <View
          style={{
            marginLeft: 50,
            marginRight: 50,
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2196F3",
            borderRadius: 10
          }}
        >
          <Text style={{ padding: 12, color: "white" }}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const textHead = {};
const stylos = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: 10
};
const input = {
  height: 40,
  borderColor: "#d1dced",
  borderWidth: 1,
  width: 260,
  padding: 2,
  justifyContent: "center",
  borderRadius: 10
};
export default Login;
