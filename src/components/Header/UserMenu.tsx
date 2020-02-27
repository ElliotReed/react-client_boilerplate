import React from 'react';
import { Link } from 'react-router-dom';
import { useMeQuery, useSignoutMutation } from '../../generated/graphql';
import { setAccessToken } from '../../accessToken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './user-menu.module.scss';

interface Props {}

const UserMenu: React.FC<Props> = () => {
	const { data, loading } = useMeQuery();
	const [signout, { client }] = useSignoutMutation();

	return (
		<div className={styles.userMenu}>
			{loading && null}

			{data && data.me && (
				<div className={styles.logged}>
					<div className={styles.icon}>
						<FontAwesomeIcon icon={['fas', 'user-circle']} size="lg" />
					</div>
					<ul className={styles.dropdown}>
						<li className={styles.user}>
							<div className={styles.email}>
								<FontAwesomeIcon icon={['fas', 'user-circle']} size="lg" /> {data.me.email}
							</div>
						</li>
						{!loading && data && data.me && (
							<li
								className={styles.signout}
								onClick={async () => {
									await signout();
									setAccessToken('');
									await client!.resetStore();
								}}
							>
								<span>Sign Out</span>
							</li>
						)}
					</ul>
				</div>
			)}
			{data && !data.me && (
				<div className={styles.signin}>
					<Link to="/signin">Sign In</Link>
					<span>or</span>
					<Link to="/register">Create Account</Link>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
