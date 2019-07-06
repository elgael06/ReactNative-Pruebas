
import React, { useState } from "react";
import { View, Text, Button, Alert, TouchableOpacity } from "react-native";

const Botones = () => {
  const [count, setCount] = useState(0);
  const mensaje = () => {
    setCount(0);
    Alert.alert("Reserter counter...");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Click in the Buttom </Text>
      <Button onPress={() => setCount(count + 1)} title="Press Me" />
      <Text>{count}</Text>
      <View>
        <TouchableOpacity onPress={mensaje}>
          <View
            style={{
              marginBottom: 30,
              width: 260,
              alignItems: "center",
              backgroundColor: "#2196F3"
            }}
          >
            <Text style={{ padding: 20, color: "white" }}>
              TouchableOpacity
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Botones;
