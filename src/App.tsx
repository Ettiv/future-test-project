import React from 'react';
import Main from './components/main/main';
// @ts-ignore
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Main/>
          </div>
      </BrowserRouter>
  );
}

export default App;
