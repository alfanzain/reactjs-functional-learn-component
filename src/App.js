import React, { useState, useEffect } from 'react';

// Context
const AuthContext = React.createContext();

// HOC
const withAuth = WrappedComponent => {
	const WithAuth = props => (
		<AuthContext.Consumer>
			{context => <WrappedComponent {...props} {...context} />}
		</AuthContext.Consumer>
	);
	return WithAuth;
};

const App = props => {
	const [user, setuser] = useState({ name: 'alfanzain' });

	return (
		<AuthContext.Provider value={user}>
			<h1>Welcome to my App!</h1>
			<StatusLogin />
			<Greeting />
			<Question />
			<Hope />
		</AuthContext.Provider>
	);
};

// Context.Consumer
const StatusLogin = props => (
	<AuthContext.Consumer>
		{context => <div>You are logged in as {context.name}</div>}
	</AuthContext.Consumer>
);

// Context.Consumer
const Greeting = props => (
	<AuthContext.Consumer>
		{context => <div>Hello {context.name}</div>}
	</AuthContext.Consumer>
);

// Context.Consumer
const Question = props => (
	<AuthContext.Consumer>
		{context => <div>Are you happy today, {context.name}?</div>}
	</AuthContext.Consumer>
);

// HOC + Context
// tanpa Context.Consumer bisa akses context
const Hope = withAuth(props => {
	return <h6>I hope you are happy, {props.name}!</h6>;
});

export default App;
