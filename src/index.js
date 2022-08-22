import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebaseConfig from './firebase-config';
import{
  FirebaseAppProvider
} from 'reactfire'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);


