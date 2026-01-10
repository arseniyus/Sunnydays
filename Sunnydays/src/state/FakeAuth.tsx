import React, {createContext, useContext, useMemo, useState} from "react";

type AuthState = {
    isSignedIn: boolean;
    signIn: () => void;
    signOut: () => void;
    toggle: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function FakeAuthProvider({ children }: {children: React.ReactNode}) {
   const [isSignedIn, setIsSignedIn] = useState(false);
   
   const value = useMemo<AuthState>(
    () => ({
        isSignedIn,
        signIn: () => setIsSignedIn(true),
        signOut: () => setIsSignedIn(false),
        toggle: () => setIsSignedIn((v) => !v), 
    }),
    [isSignedIn]
   );

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

   export function useFakeAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useFakeAuth must be used inside FakeAuthProvider");
    return context; 
   }