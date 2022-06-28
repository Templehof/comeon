import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

const Header = ({filter}) => {
	const { currentUser, logUserOut } = useContext(AuthContext);
	const { avatar, event, name, username } = currentUser;

	const handleLogOut = async () => {
		try {
			const response = await fetch('http://localhost:3001/logout', {
				method: 'post',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: username,
				}),
			});

			if (response.statusText === 'OK') {
				logUserOut();
			} else {
				throw new Error('Something went wrong, please try again later');
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className="ui grid centered">
			<div className="twelve wide column">
				<div className="ui list">
					{/* player item template */}
					<div className="player item">
						<img
							className="ui avatar image"
							src={avatar}
							alt="avatar"
						/>

						<div className="content">
							<div className="header">
								<b className="name">{name}</b>
							</div>
							<div className="description event">{event}</div>
						</div>
					</div>
					{/*end player item template */}
				</div>
				<div
					className="logout ui left floated secondary button inverted"
					onClick={handleLogOut}
				>
					<i className="left chevron icon"></i>Log Out
				</div>
			</div>
			<div className="four wide column">
				<div className="search ui small icon input ">
					<input type="text" placeholder="Search Game" onChange={(e)=>{filter(e)}} />
					<i className="search icon"></i>
				</div>
			</div>
		</div>
	);
};

export default Header;
