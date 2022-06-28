import { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

const defaultFormFields = {
	username: '',
	password: '',
};

const LogInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { username, password } = formFields;
	const { logUserIn } = useContext(AuthContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3001/login', {
				method: 'post',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			});
			const userData = await response.json();
			if (response.statusText === 'OK') {
				logUserIn({...userData.player, username});
				resetFormFields();
			} else {
				resetFormFields();
				throw new Error(
					'Username or password doesnt exist, please try again'
				);
			}
		} catch (error) {
			alert(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="login" style={{ display: 'block' }}>
			<div className="ui grid centered">
				<form
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<div className="fields">
						<div className="required field">
							<div className="ui icon input">
								<input
									type="text"
									name="username"
									placeholder="Username"
									required
									value={username}
									onChange={handleChange}
								/>
								<i className="user icon"></i>
							</div>
						</div>
						<div className="required field">
							<div className="ui icon input">
								<input
									type="password"
									name="password"
									placeholder="Password"
									required
									onChange={handleChange}
									value={password}
								/>
								<i className="lock icon"></i>
							</div>
						</div>
						<div className="field">
							<div className="ui icon input">
								<input type="submit" value="Login" />
								<i className="right chevron icon"></i>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LogInForm;
