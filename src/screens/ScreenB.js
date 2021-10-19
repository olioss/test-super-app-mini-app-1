import React, { Component } from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import { UiButton } from "@test-superapp/ui-components";

function ScreenB({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MiniApp 1 ScreenB</Text>
      <UiButton
        title="Go to MiniApp2"
        onPress={() => navigation.navigate('MiniApp2')}
      />
    </SafeAreaView>
  );
}

export default ScreenB
