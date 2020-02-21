import React, { useState } from 'react';
import './App.css';

const ctxColor = React.createContext();

/*
Dengan React Context:
- Kita tidak perlu passing props secara berantai.
- Kita hanya perlu memberikan context kepada component yang membutuhkan. Apalagi terhadap child component.
*/

const App = () => {
	const [lang, setLang] = useState('Indonesia');

	return (
		<ctxColor.Provider value={lang}>
			<div style={{ margin: '20px auto', width: '500px', textAlign: 'center' }}>
				<Welcome />
				<Form />
			</div>
		</ctxColor.Provider>
	);
};

const Welcome = () => {
	return (
		<ctxColor.Consumer>
			{context => (
				<div>
					<h3>Selamat datang!</h3>
					<br />
					<p>
						Anda berada pada portal berbahasa <strong>{context}</strong>
					</p>
				</div>
			)}
		</ctxColor.Consumer>
	);
};

const Form = () => {
	return (
		<div>
			<Confirm />
		</div>
	);
};

const Confirm = () => {
	return (
		<ctxColor.Consumer>
			{context => (
				<div>
					<button>
						{context == 'Indonesia' && 'Siapa nama kamu?'}
						{context == 'English' && 'Who are you?'}
					</button>
				</div>
			)}
		</ctxColor.Consumer>
	);
};

export default App;
