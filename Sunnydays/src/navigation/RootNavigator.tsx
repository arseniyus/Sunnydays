import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFakeAuth } from "../state/FakeAuth";
import { AuthStack } from "./AuthStack";
import { MainTabs } from "./MainTabs";

export function RootNavigator() {
    const { isSignedIn } = useFakeAuth();

    return (
        <NavigationContainer>
            {isSignedIn ? <MainTabs /> : <AuthStack />} 
        </NavigationContainer>
    );
}