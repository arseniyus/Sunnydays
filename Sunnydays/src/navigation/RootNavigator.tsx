import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFakeAuth } from "../state/FakeAuth";
import { AuthStack } from "./AuthStack";
import { OnboaridngStack } from "./OnboardingStack";
import { MainTabs } from "./MainTabs";

export function RootNavigator() {
    const { isSignedIn, onboarding } = useFakeAuth();

    return (
        <NavigationContainer>
            {!isSignedIn ? (
                <AuthStack />
             ) : onboarding !== "ready" ? (
                <OnboaridngStack />
             ) : (
             <MainTabs />
             )} 
        </NavigationContainer>
    );
}