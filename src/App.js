import React from 'react';

const withUser = WrappedComponent => {
	const WithUser = () => (
		<WrappedComponent user="Alfan Zain"></WrappedComponent>
	);
	return WithUser;
};

const App = props => {
	return <>You are logged on as {props.user}</>;
};

export default withUser(App);
