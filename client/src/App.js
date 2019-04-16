import React, {Component} from 'react';

import './App.css';

export default class App extends Component {
	componentDidMount() {
		this.props.testAction();
	}
	render() {
		return (
			<div>
				react
			</div>
		);
	}
}

