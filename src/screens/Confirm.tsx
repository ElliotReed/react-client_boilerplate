import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { useConfirmUserMutation } from 'generated/graphql';

export const Confirm: React.FC<RouteComponentProps> = ({ match }) => {
	const [token, setToken] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [toSignin, setToSignin] = React.useState(false);
	const [confirm] = useConfirmUserMutation();

	const validateRegistration = (e: React.SyntheticEvent) => {
		e.preventDefault();
		confirmed();
	};

	const confirmed = async () => {
		const response = await confirm({ variables: { token } });
		if (response && response.data) {
			if (response.data.confirmUser) {
				// How to signin after registration?
				setEmail(response.data.confirmUser.email);
				setToSignin(true);
			}
		}
	};

	if (token === '') {
		const parameters: any = match.params;
		setToken(parameters.token);
	}

	if (toSignin === true) {
		return (
			<Redirect
				to={{
					pathname: '/signin',
					state: { email: email },
				}}
			/>
		);
	}
	return (
		<div>
			<form onSubmit={validateRegistration}>
				<h1>Just one more step to confirm your registration.</h1>
				<button type="submit">Validate Registration</button>
			</form>
		</div>
	);
};
