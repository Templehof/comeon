import { useEffect, useState } from 'react';

import Header from '../header/header.component';
import GameItem from '../game-item/game-item.component';
import GameCategories from '../game-categories/game-categories.component';

const GamesScreen = () => {
	const [gamesList, setGamesList] = useState([]);
	const [categories, setCategories] = useState([]);

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
	}, []);

	return (
		<div className="casino">
			<Header />
			<div className="ui grid">
				<div className="twelve wide column">
					<h3 className="ui dividing header">Games</h3>
					<div className="ui relaxed divided game items links">
						{gamesList.map((game) => (
							<GameItem key={game.code} game={game} />
						))}
					</div>
				</div>
				<div className="four wide column">
					<h3 className="ui dividing header">Categories</h3>
					<div className="ui selection animated list category items">
						{categories.map((category) => (
							<GameCategories key={category.id} name={category.name} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GamesScreen;
