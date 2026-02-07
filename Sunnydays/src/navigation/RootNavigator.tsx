import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFakeAuth } from "../state/FakeAuth";
import { AuthStack } from "./AuthStack";
import { OnboardingStack } from "./OnboardingStack";
import { MainTabs } from "./MainTabs";

export function RootNavigator() {
    const { isSignedIn, onboarding } = useFakeAuth();

    return (
        <NavigationContainer>
            {!isSignedIn ? (
                <AuthStack />
             ) : onboarding !== "ready" ? (
                <OnboardingStack />
             ) : (
             <MainTabs />
             )} 
        </NavigationContainer>
    );
}