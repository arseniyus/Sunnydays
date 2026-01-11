import React from "react";
import { View, Text, Button } from "react-native";
import { Screen } from "../components/Screen";
import { useFakeAuth } from "../state/FakeAuth";

export function MeScreen() {
    const {signOut, isSignedIn, resetOnboarding } = useFakeAuth();

    return (
        <Screen>
            <View style={{ gap: 12 }}>
                <Text style={{ fontSize: 24, fontWeight: "600"}}>Me</Text>
                <Text>Signed in: {isSignedIn ? "Yes" : "No"}</Text>

                <Button title="Reset Onboarding (back to quiz)" onPress={resetOnboarding}/>  
                <Button title="Sign out (fake)" onPress={signOut} /> 
            </View >
        </Screen>
    )
}