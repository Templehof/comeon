import { useEffect } from 'react';

const GameScreen = ({ handleCloseGame, gameName }) => {
	useEffect(() => {
		window.comeon.game.launch(gameName);
	}, []);

	return (
		<div className="ingame">
			<div className="ui grid centered">
				<div className="three wide column">
					<div
						className="ui right floated secondary button inverted"
						onClick={handleCloseGame}
					>
						<i className="left chevron icon"></i>Back
					</div>
				</div>
				<div className="ten wide column">
					<div id="game-launch"></div>
				</div>
				<div className="three wide column"></div>
			</div>
		</div>
	);
};

export default GameScreen;