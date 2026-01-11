import React from "react";
import { View, Text, Button } from "react-native";
import { Screen } from "../components/Screen";
import { useFakeAuth } from "../state/FakeAuth";

export function QuizScreen() {
    const { completeQuiz, signOut } = useFakeAuth();

    return (
        <Screen>
            <View style={{ gap: 12 }}>
                <Text style={{ fontSize: 22, fontWeight: "600" }}>Onboarding Quiz</Text>
                <Text>This is a placeholder. Quiz gies gere</Text>

                <Button title="Complete quiz (fake)" onPress={completeQuiz} />
                <Button title="Sign out" onPress={signOut} />
            </View>
        </Screen>
    )
}