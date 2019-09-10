import React from 'react';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

const PlasticCosts = [
	{ Name: "ABS", Cost: 2.0 },
	{ Name: "PLA", Cost: 3.4 },
];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',

			selectedPlasticType: 1,
			selectedFigure: 0,
			lenA: 0,
			lenB: 0,
			lenC: 0,
			lenD: 0,
		};
	}

	getVolume = () => {
		if (this.state.selectedFigure === 0) {
			return Math.pow(this.state.lenA, 3);
		}
		if (this.state.selectedFigure === 1) {
			return 1/3 * this.state.lenA * this.state.lenB * this.state.lenB;
		}
		if (this.state.selectedFigure === 2) {
			return 4/3 * Math.PI * Math.pow(this.state.lenA, 3);
		}
		if (this.state.selectedFigure === 3) {
			return 1/3 * Math.PI * this.state.lenA * Math.pow(this.state.lenB, 2);
		}
		if (this.state.selectedFigure === 4) {
			return 1/3 * this.state.lenA * this.state.lenB * this.state.lenC * Math.sqrt(this.state.lenD);
		}
		if (this.state.selectedFigure === 5) {
			return this.state.lenA * this.state.lenB * this.state.lenC;
		}
	};

	getCost = (plastic, volume) => {
		let number = Math.ceil(PlasticCosts[plastic].Cost * volume);
		return number === 0 ? 0 : number + 100;
	};

	render() {
		let volume = this.getVolume();
		let cost = this.getCost(this.state.selectedPlasticType, volume);

		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home"
					  changeLen={(len, val) => {
					  	switch (len) {
							case 0:
								this.setState({lenA: val});
								break;
							case 1:
								this.setState({lenB: val});
								break;
							case 2:
								this.setState({lenC: val});
								break;
							case 3:
								this.setState({lenD: val});
								break;
							default:
								break;
						}
					  }}
					  cost={cost}
					  lenA={this.state.lenA} lenB={this.state.lenB}
					  lenC={this.state.lenC} lenD={this.state.lenD}
					  selectedFigure={this.state.selectedFigure}
					  selectedPlastic={this.state.selectedPlasticType}
					  plasticTypes={PlasticCosts}
					  selectFigure={(x) => {this.setState({ selectedFigure: x })}}
					  volume={volume}
					  changePlastic={(x) => this.setState({selectedPlasticType: x})}
				/>
			</View>
		);
	}
}

export default App;
