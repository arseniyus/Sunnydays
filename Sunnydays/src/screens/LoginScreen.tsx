import React from "react";
import { View, Text, Button } from "react-native";
import { Screen } from "../components/Screen";

export function LoginScreen({ navigation }: any  ) {
    return (
        <Screen>
            <View style={{ gap: 12 }}>
                <Text style={{ fontSize: 24, fontWeight: "600"}}>Login</Text>
                <Text>Laster: Buttons for Google/ Apple single sign-on will go here</Text>

                <Button
                    title="Enter (temporary)"
                    onPress={() => navigation.replace("MainTabs")}
                /> 
            </View >
        </Screen>
    )
}