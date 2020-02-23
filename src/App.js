import React, { useState } from 'react';

const Amount = props => {
	const [amount, setAmount] = useState(0);

	const increase = () => {
		setAmount(amount + 1);
	};

	const decrease = () => {
		setAmount(amount - 1);
	};

	return (
		<div>
			<h4>Dollar: {amount}</h4>
			<button type="button" onClick={increase}>
				+
			</button>
			<button type="button" onClick={decrease}>
				-
			</button>

			{props.render(amount)}
		</div>
	);
};

const Rupiah = props => <h6>Rupiah = {props.amount * 13000}</h6>;

const App = () => {
	return (
		<Amount
			render={amount => (
				<div>
					<Rupiah amount={amount} />
				</div>
			)}
		/>
	);
};

export default App;
