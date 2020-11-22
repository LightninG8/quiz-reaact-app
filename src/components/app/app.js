import React from 'react';

import './app.scss';

// Компоненты
import AppHeader from "../app-header";
import AppHero from "../app-hero";
import AppQuestions from "../app-questions";

function App() {
	return (
		<div className="app">
			<div className="app__body">
				<AppHeader></AppHeader>
				<AppHero></AppHero>
				<AppQuestions></AppQuestions>
			</div>    
		</div>
  );
}

export default App;
