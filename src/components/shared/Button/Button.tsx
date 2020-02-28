import React from 'react';

import styles from './button.module.scss';

interface ButtonProps {
	// typeOf: React.ButtonHTMLAttributes<HTMLButtonElement>,
	children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ children }) => {
	return <button className={styles.button}>{children}</button>;
};

export default Button;
