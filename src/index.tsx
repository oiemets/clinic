import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from './store/configStore';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './styles';
import { injectStore } from './services';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = appStore();

injectStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
