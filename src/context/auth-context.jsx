import { createContext, useState } from 'react';

export const AuthContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
	isLoggedIn: false,
	setIsLoggedIn: () => false,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const logUserIn = (user) => {
		setCurrentUser(user);
		setIsLoggedIn(true);
	};

	const logUserOut = () => {
		setCurrentUser(null);
		setIsLoggedIn(false);
	};
	const value = { currentUser, isLoggedIn, logUserIn, logUserOut };

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};
