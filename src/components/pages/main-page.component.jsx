import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

import LogInForm from '../log-in-form/login.component';
import GamesLobby from './games-lobby.component';

const MainPage = () => {
	const { isLoggedIn } = useContext(AuthContext);

	return <>{isLoggedIn ? <GamesLobby /> : <LogInForm />}</>;
};

export default MainPage;
