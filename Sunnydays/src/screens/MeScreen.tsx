import React from "react";
import { View, Text, Button } from "react-native";
import { Screen } from "../components/Screen";
import { useFakeAuth } from "../state/FakeAuth";

export function MeScreen() {
    const {signOut, isSignedIn } = useFakeAuth();

    return (
        <Screen>
            <View style={{ gap: 12 }}>
                <Text style={{ fontSize: 24, fontWeight: "600"}}>Me</Text>
                <Text>Signed in: {isSignedIn ? "Yes" : "No"}</Text>

                <Button
                    title="Sign out (fake)"
                    onPress={signOut}
                /> 
            </View >
        </Screen>
    )
}