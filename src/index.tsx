import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configStore';

ReactDOM.render(
	<Router>
		<Provider store={store()}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);
