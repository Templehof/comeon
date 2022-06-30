import { useEffect } from 'react';

const GameScreen = ({ handleCloseGame, gameName }) => {
	useEffect(() => {
		window.comeon.game.launch(gameName);
	}, [gameName]);

	return (
		<div className="ingame">
			<div className="ui grid centered game-screen-container">
				<div id="game-launch"></div>
			</div>
			<div
				className="ui secondary button inverted back-btn"
				onClick={handleCloseGame}
			>
				<i className="left chevron icon"></i>Back
			</div>
		</div>
	);
};

export default GameScreen;
