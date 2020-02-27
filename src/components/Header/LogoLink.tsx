import React from 'react';
import { Link } from 'react-router-dom';

import styles from './logo-link.module.scss';

const Navigation: React.FC = () => {
	return (
		<Link to="/" className={styles.logo}><h1>Logo</h1></Link>
	);
};

export default Navigation;
