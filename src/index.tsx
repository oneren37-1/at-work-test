import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import PlatformProvider from "./components/PlatformContext/PlatformContext";

const container = document.getElementById('root')!;
const root = createRoot(container);
fetch('http://185.143.179.130/is-anybody-here')

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <PlatformProvider>
            <App />
        </PlatformProvider>
    </Provider>
  </React.StrictMode>
);
