import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MeScreen } from "../screens/MeScreen";
import { PartnerScreen } from "../screens/PartnerScreen";
import { UsScreen } from "../screens/UsScreen";
import { CalendarScreen } from "../screens/CalendarScreen";

const Tab = createBottomTabNavigator();

export function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerTitleAlign: "center"}}>
            <Tab.Screen name="Me" component={MeScreen} />
            <Tab.Screen name="Parner" component={PartnerScreen} />
            <Tab.Screen name="Us" component={UsScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
        </Tab.Navigator>
    );
}