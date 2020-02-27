import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from 'screens/Home';
import { Register } from 'screens/Register';
import { Signin } from 'screens/Signin';
import { Bye } from 'screens/Bye';
import { Confirm } from 'screens/Confirm';

import './App.scss';

import { Header } from 'components/Header';
import MainPageWrapper from 'components/shared/MainPageWrapper';

export const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<MainPageWrapper>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/register" component={Register} />
					<Route exact path="/signin">
						<Signin />
					</Route>
					<Route exact path="/bye">
						<Bye />
					</Route>
					<Route exact path="/user/confirm/:token" component={Confirm} />
				</Switch>
			</MainPageWrapper>
		</BrowserRouter>
	);
};
