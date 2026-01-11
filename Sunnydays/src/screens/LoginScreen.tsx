import React from "react";
import { View, Text, Button } from "react-native";
import { Screen } from "../components/Screen";
import { useFakeAuth } from "../state/FakeAuth";

export function LoginScreen() {
    const { signIn, startRegistration } = useFakeAuth();

    return ( 
        <Screen>
            <View style={{ gap: 12 }}>
                <Text style={{ fontSize: 24, fontWeight: "600"}}>Login</Text>
                <Text>Placeholder: tap to "sign in"</Text>

                <Button title="Sign in (fake)" onPress={signIn} /> 
                <Button title="Register" onPress={startRegistration}/>
            </View >
        </Screen>
    );
}