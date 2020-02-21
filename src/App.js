import React, { useState } from 'react';
import './App.css';

const ctxLang = React.createContext();

/*
Dengan React Context:
- Kita tidak perlu passing props secara berantai.
- Kita hanya perlu memberikan context kepada component yang membutuhkan. Apalagi terhadap child component.
*/

const App = () => {
	const [lang, setLang] = useState('Indonesia');

	return (
		<ctxLang.Provider value={lang}>
			<div style={{ margin: '20px auto', width: '500px', textAlign: 'center' }}>
				<Welcome />
				<Form />
			</div>
		</ctxLang.Provider>
	);
};

const Welcome = () => {
	return (
		<ctxLang.Consumer>
			{context => (
				<div>
					<h3>Selamat datang!</h3>
					<br />
					<p>
						Anda berada pada portal berbahasa <strong>{context}</strong>
					</p>
				</div>
			)}
		</ctxLang.Consumer>
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
		<ctxLang.Consumer>
			{context => (
				<div>
					<button>
						{context == 'Indonesia' && 'Siapa nama kamu?'}
						{context == 'English' && 'Who are you?'}
					</button>
				</div>
			)}
		</ctxLang.Consumer>
	);
};

export default App;
