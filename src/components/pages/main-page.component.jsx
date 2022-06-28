import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

import LogInForm from '../log-in-form/login.component';
import GamesScreen from './games-screen.component';

const MainPage = () => {
	const { currentUser, isLoggedIn } = useContext(AuthContext);

	return <>
		{isLoggedIn ? <GamesScreen /> : <LogInForm />}
	</>;
};

export default MainPage;
