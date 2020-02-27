import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navigation.module.scss';

type Props = {
	alignVerticle?: boolean,
	handleOffscreenContainer?: () => void,
};

const Navigation: React.FC<Props> = ({ alignVerticle, handleOffscreenContainer }) => {
	return (
		<nav className={alignVerticle ? styles.navVerticle : styles.nav} onClick={handleOffscreenContainer}>
			<ul className={alignVerticle ? styles.linkVerticle : styles.link}>
				<li>
					<NavLink exact to="/" activeClassName={styles.active}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/bye" activeClassName={styles.active}>
						Link 1
					</NavLink>
				</li>
				<li>
					<NavLink to="/register" activeClassName={styles.active}>
						Link 2
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
