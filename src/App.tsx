import './App.css';
import Main from './components/main'
import Modal from 'react-modal'
import React, { useEffect, useRef } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      
      main: '#037fff',
     
      
    },
    secondary: {
      
      main: '#f44336',
      
      
    },
  },
});

function App() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      Modal.setAppElement(ref.current as unknown as HTMLElement)
    }
  }, [ref]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{minHeight: '100%', height: '100%'}} ref={ref}>
          <Main />
        </div>
    </ThemeProvider>
    
  );
}

export default App;
