import GameItem from '../game-item/game-item.component';

const GamesList = ({ handleLaunchGame, gamesList }) => {
	return (
			<div className="twelve wide column">
				<h3 className="ui dividing header">Games</h3>
				<div className="ui relaxed divided game items links">
					{gamesList.map((game) => (
						<GameItem
							key={game.code}
							game={game}
							handleLaunchGame={handleLaunchGame}
						/>
					))}
				</div>
			</div>
	);
};

export default GamesList;
