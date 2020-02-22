import React, { useState, useEffect } from 'react';

const withLocalStorage = WrappedComponent => {
	const WithLocalStorage = props => {
		const get = key => localStorage.getItem(key);
		const save = (key, data) => localStorage.setItem(key, data);
		const remove = key => localStorage.removeItem(key);

		return (
			<WrappedComponent get={get} save={save} remove={remove} {...props} />
		);
	};

	return WithLocalStorage;
};

const App = props => {
	const [name, setName] = useState(props.get('name'));

	useEffect(() => {
		if (!name) {
			console.log(name);
			props.save('name', 'guest');
			setName('guest');
		}
	}, [name]);

	return <>You are logged on as {name}</>;
};

export default withLocalStorage(App);
