import React from 'react';
import './App.css';
import { Descope } from "@descope/react-sdk";

const App: React.FC = () => {

  return (
    <Descope
      flowId="sign-in-email-or-phone-input"
      onSuccess={(e) => {
        window.alert("lsdfkjdlkjslkdfj")
      }}
      onError={(e) => console.log("Could not log in!", e)}
    />
  );
};

export default App;