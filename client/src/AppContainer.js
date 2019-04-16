import {connect} from 'react-redux';

import App from './App';

const TEST = 'HOME/TEST';

export const testAction = () => ({
	type: TEST,
});

const mapDispatchToProps = dispatch => ({
	testAction: () => dispatch(testAction()),
});

export default connect(null, mapDispatchToProps)(App);
