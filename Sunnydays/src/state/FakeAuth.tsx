import React, {createContext, useContext, useMemo, useState} from "react";

type OnboardingStatus = "quiz_incomplete" | "ready";

type AuthState = {
    isSignedIn: boolean;
    onboarding: OnboardingStatus;

    signIn: () => void;
    signOut: () => void;

    completeQuiz: () => void;
    resetOnboarding: () => void;

    toggle: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function FakeAuthProvider({ children }: {children: React.ReactNode}) {
   const [isSignedIn, setIsSignedIn] = useState(false);
   const [onboarding, setOnboarding] = useState<OnboardingStatus>("quiz_incomplete");
   
   const value = useMemo<AuthState>(
    () => ({
        isSignedIn,
        onboarding,

        signIn: () => {setIsSignedIn(true);
        },

        signOut: () => {setIsSignedIn(false);
            setOnboarding("quiz_incomplete");         
        },

        completeQuiz: () => setOnboarding("ready"),
        resetOnboarding: () => setOnboarding("quiz_incomplete"),

        startRegistration: () => {
            setIsSignedIn(true);
            setOnboarding("quiz_incomplete");
        },

        toggle: () => setIsSignedIn((v) => !v), 
    }),
    [isSignedIn, onboarding]
   );

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

   export function useFakeAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useFakeAuth must be used inside FakeAuthProvider");
    return context; 
   }