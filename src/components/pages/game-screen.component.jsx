import { useEffect } from 'react';

const GameScreen = ({ handleCloseGame, gameName }) => {
	useEffect(() => {
		window.comeon.game.launch(gameName);
	}, [gameName]);

	return (
		<div className="ingame">
			<div className="ui grid centered game-screen-container">
				<div className="back-btn-container">
					<div
						className="ui right floated secondary button inverted"
						onClick={handleCloseGame}
					>
						<i className="left chevron icon"></i>Back
					</div>
				</div>
				<div id="game-launch"></div>
			</div>
		</div>
	);
};

export default GameScreen;
