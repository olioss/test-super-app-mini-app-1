import React, { Component } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import {UiButton}  from "@test-superapp/ui-components";

function ScreenA({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MiniApp1 ScreenA</Text>
      <Text>Version 0.3</Text>
      <UiButton onPress={() => navigation.navigate('ScreenB')} title={"Go to ScreenB"} />
    </SafeAreaView>
  );
}

export default ScreenA
