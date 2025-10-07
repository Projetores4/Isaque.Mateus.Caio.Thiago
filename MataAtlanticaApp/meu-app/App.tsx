import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/home';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#2E8B57" 
      />
      <Home />
    </>
  );
}