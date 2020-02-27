import React from 'react';
import { Link } from 'react-router-dom';

import { useUsersQuery } from '../generated/graphql';

import styles from './Home.module.scss';

interface Props {}

export const Home: React.FC<Props> = () => {
	const { data } = useUsersQuery({ fetchPolicy: 'network-only' });

	if (!data) {
		return <div>Loading...</div>;
	}
	return (
		<div className={styles.container}>
			<Link to="/register" className={styles.link}>
				register
			</Link>
			<div className={styles.text}>users:</div>
			<ul>
				{data.users.map(user => {
					return (
						<li key={user.id}>
							{user.name}, {user.id}, {user.email}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
