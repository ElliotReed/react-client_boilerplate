import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './offscreen-container.module.scss';

type OffscreenContainerProps = {
	isVisible: boolean;
	// children: any,
	handleOffscreenContainer: () => void;
};
const OffscreenContainer: React.FunctionComponent<OffscreenContainerProps> = ({
	isVisible,
	children,
	handleOffscreenContainer,
}) => {
	let classNames = styles.offscreenContainer;
	const show = styles.offscreenContainerShow;

	if (isVisible) {
		classNames += ` ${show}`;
	}
	return (
		<div className={classNames} onClick={handleOffscreenContainer}>
			<button className={styles.button} onClick={handleOffscreenContainer}>
				<FontAwesomeIcon icon={['fas', 'times']} />
			</button>
			{children}
		</div>
	);
};

export default OffscreenContainer;
