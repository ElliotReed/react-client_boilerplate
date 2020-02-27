import React from 'react';

import styles from './button.module.scss';

export const Button: React.FC = ({ children }) => {
	return <button className={styles.button}>{children}</button>;
};

export default Button;
