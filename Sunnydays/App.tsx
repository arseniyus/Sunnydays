import React from 'react';
import { RootNavigator } from './src/navigation/RootNavigator';
import { FakeAuthProvider } from './src/state/FakeAuth';

export default function App() {
  return (
    <FakeAuthProvider>
          <RootNavigator />
    </FakeAuthProvider>
  );
}

