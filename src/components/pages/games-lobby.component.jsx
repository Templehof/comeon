import React, { useState, useEffect } from 'react';

import Header from '../header/header.component';
import GamesList from '../games-list/games-list.component';
import GameScreen from './game-screen.component';
import CategoriesList from '../categories-list/categories-list.component';

const GamesLobby = () => {
	const [isGameLaunched, setIsGameLaunched] = useState(false);
	const [gameName, setGameName] = useState(null);
	const [gamesList, setGamesList] = useState([]);
	const [filteredGames, setFilteredGames] = useState(null);
	const [categories, setCategories] = useState([]);

	const handleLaunchGame = (game) => {
		setGameName(game);
		setIsGameLaunched(true);
	};

	const handleCloseGame = () => {
		setIsGameLaunched(false);
	};

	const filterGames = (e) => {
		const filteredGames = gamesList.filter((game) =>
			game.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		return setFilteredGames(filteredGames);
	};

	const filterGamesByCategory = (e) => {
		const filteredGames = gamesList.filter((game) =>
			game.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		return setFilteredGames(filteredGames);
	};

	useEffect(() => {
		const getCategories = async () => {
			const response = await fetch('http://localhost:3001/categories', {
				method: 'get',
			});
			const categories = await response.json();
			setCategories(categories);
		};
		getCategories();
	}, []);

	useEffect(() => {
		const getGames = async () => {
			const response = await fetch('http://localhost:3001/games', {
				method: 'get',
			});
			const gamesList = await response.json();
			setGamesList(gamesList);
		};
		getGames();
		console.log(gamesList)
	}, []);

	return (
		<div className="casino">
			{isGameLaunched ? (
				<GameScreen
					handleCloseGame={handleCloseGame}
					gameName={gameName}
				/>
			) : (
				<React.Fragment>
					<Header filter={filterGames} />
					<div className="ui grid">
						<GamesList
							handleLaunchGame={handleLaunchGame}
							gamesList={
								filteredGames ? filteredGames : gamesList
							}
						/>
						<CategoriesList categories={categories} />
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default GamesLobby;
