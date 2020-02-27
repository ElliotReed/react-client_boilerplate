import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useRegisterMutation } from '../generated/graphql';

import './Register.scss';

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [register] = useRegisterMutation();

	return (
		<form
			onSubmit={async e => {
				e.preventDefault();
				const response = await register({
					variables: {
						name,
						email,
						password,
					},
				});
				console.log(response);
				history.push('/');
			}}
		>
			<div>
				<input
					value={name}
					placeholder="name"
					onChange={e => {
						setName(e.target.value);
					}}
				/>
			</div>
			<div>
				<input
					value={email}
					placeholder="email"
					onChange={e => {
						setEmail(e.target.value);
					}}
				/>
			</div>
			<div>
				<input
					type="password"
					value={password}
					placeholder="password"
					onChange={e => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<button type="submit">register</button>
		</form>
	);
};
