import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps, useHistory, useLocation } from 'react-router-dom';
import { useSigninMutation, MeDocument, MeQuery } from '../generated/graphql';
import { setAccessToken } from '../accessToken';

import styles from './sign-in.module.scss';

import Form from 'components/shared/Form';

const FormFooter = () => {
	return (
		<div className={styles.footer}>
			<div>Don't have an account?</div>
			<div>
				<Link to="/register">create account</Link>
			</div>
		</div>
	);
};

interface Props {}

interface WithEmail extends RouteComponentProps {
	state?: {
		email?: string;
	};
}
export const Signin: React.FC = () => {
	let history = useHistory();
	let location = useLocation();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [signin] = useSigninMutation();
	//  let emailState: location: {state?: {email?: string}} = {};
	useEffect(() => {
		// if (location !== null && location !== undefined && location.state !== null && location.state !== undefined ) {
		if (location.state === undefined) {
			console.log('has email');
			return;
			// const newLocationState: Location = {...location.state}
			// console.log(newLocationState)
			// // if (location.state.hasOwnProperty('email')) {
			// setEmail(location.state.email!);
		} else {
			// setEmail(location.state.email? || '');
			// console.log(location.state.email)
		}
		// }

		if (location && location.state) {
			// setEmail(newLocationState.email);
			// setAccessToken(response.data.signin.accessToken);
		}
	}, [location]);

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const response = await signin({
			variables: {
				email,
				password,
			},
			update: (store, { data }) => {
				if (!data) {
					return null;
				}
				store.writeQuery<MeQuery>({
					query: MeDocument,
					data: {
						__typename: 'Query',
						me: data.signin.user,
					},
				});
			},
		});
		console.log(response);
		if (response && response.data) {
			setAccessToken(response.data.signin.accessToken);
		}
		history.push('/');
	};

	return (
		<div className={styles.page}>
			<Form title="sign in" text="sign in" handleSubmit={handleSubmit} footer={<FormFooter />}>
				<input
					value={email}
					placeholder="email"
					onChange={e => {
						setEmail(e.target.value);
					}}
				/>
				<input
					type="password"
					value={password}
					placeholder="password"
					onChange={e => {
						setPassword(e.target.value);
					}}
				/>
			</Form>
		</div>
	);
};
