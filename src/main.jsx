import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { store } from './feature/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MantineProvider>
    <NextUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NextUIProvider>
  </MantineProvider>
  </BrowserRouter>
)
