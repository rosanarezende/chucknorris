import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'

import { routes } from '../utils/constants'

import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';
import JokeByCategoryPage from './JokeByCategoryPage';

function Routes(props) {
	const { history } = props

	return (
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path={routes.home} component={HomePage} />
				<Route exact path={routes.category} component={JokeByCategoryPage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</ConnectedRouter>
	)
}

export default Routes