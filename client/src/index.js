import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Routeur from './routes/Routeur';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Routeur />
	</React.StrictMode>
);