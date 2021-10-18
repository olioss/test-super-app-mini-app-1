import React, { Component } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";

function ScreenA({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MiniApp1 ScreenA</Text>
      <Text>Version 1.6</Text>
      <Button
        title="Go to ScreenB"
        onPress={() => navigation.navigate('ScreenB')}
      />
    </SafeAreaView>
  );
}

export default ScreenA
