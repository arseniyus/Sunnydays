import React from "react";
import { View, Text, Button } from "react-native";
import { Screen } from "../components/Screen";

export function PartnerScreen({ navigation }: any  ) {
    return (
        <Screen>
            <View style={{ gap: 12 }}>
                <Text style={{ fontSize: 24, fontWeight: "600"}}>Patner</Text>
                <Text>Placeholder Text</Text>

                <Button
                    title="Enter (temporary)"
                    onPress={() => navigation.replace("MainTabs")}
                /> 
            </View >
        </Screen>
    )
}