import React from 'react';

import './app.scss';

import AppHeader from "../app-header";
import AppHero from "../app-hero";

function App() {
	return (
		<div className="app">
			<div className="app__body">
				<AppHeader></AppHeader>
				<AppHero></AppHero>
			</div>    
		</div>
  );
}

export default App;
