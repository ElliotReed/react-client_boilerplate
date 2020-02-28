import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useRegisterMutation } from '../generated/graphql';

import styles from './register.module.scss';

import Form from 'components/shared/Form';

const FormFooter = () => {
	return (
		<div className={styles.footer}>
			<div>Already have an account?</div>
			<div>
				<Link to="/signin">sign in</Link>
			</div>
		</div>
	);
};

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [register] = useRegisterMutation();

	const handleSubmit = async (e: React.SyntheticEvent) => {
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
	};

	return (
		<div className={styles.page}>
			<Form title="Create Account" text="create account" handleSubmit={handleSubmit} footer={<FormFooter />}>
				<input
					value={name}
					placeholder="name"
					onChange={e => {
						setName(e.target.value);
					}}
				/>
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
