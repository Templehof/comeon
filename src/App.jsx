import React from 'react';

import MainPage from './components/pages/main-page.component';
import Logo from './components/ui-elements/logo.component';

const App = () => {
	return (
		<React.Fragment>
			<Logo />
			<div className="main container">
				<MainPage />
			</div>
		</React.Fragment>
	);
};

export default App;
