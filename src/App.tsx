import React, { useState, useEffect } from 'react';
import { Routes } from './Routes';
import { setAccessToken } from './accessToken';

interface Props {
	// apiURL: string
}

export const App: React.FC<Props> = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/refresh_token`, {
			method: 'POST',
			credentials: 'include',
		}).then(async res => {
			const { accessToken } = await res.json();
			setAccessToken(accessToken);
			setLoading(false);
		});
	});

	if (loading) {
		return <div>loading...</div>;
	}

	return <Routes />;
};
