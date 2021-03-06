const GameItem = ({ game, handleLaunchGame }) => {
	const { name, description, icon, code } = game;

	return (
		<div className="game item">
			<div className="ui small image">
				<img src={icon} alt="game-icon" />
			</div>
			<div className="content">
				<div className="header">
					<b className="name">{name}</b>
				</div>
				<div className="description">{description}</div>
				<div className="extra">
					<div
						className="play ui right floated secondary button inverted"
						onClick={() => {
							handleLaunchGame(code);
						}}
					>
						Play
						<i className="right chevron icon"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameItem;
