// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ConsoleMfe1 } from '@canserkanuren/console-mfe-1';
import { ConsoleMfe2 } from '@canserkanuren/console-mfe-2';
import React from 'react';

export function App() {
  console.log('🚀 ~ file: app.tsx ~ line 8 ~ App ~ window.env', window.env);
  return (
    <React.Fragment>
      <ConsoleMfe1></ConsoleMfe1>
      <ConsoleMfe2></ConsoleMfe2>
    </React.Fragment>
  );
}

export default App;
