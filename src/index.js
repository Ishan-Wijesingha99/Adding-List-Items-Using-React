import React from 'react';
import ReactDOM from 'react-dom/client';
import { ItemList } from './components/ItemList';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <ItemList />
  </React.StrictMode>
)

