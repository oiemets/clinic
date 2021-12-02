import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from './store/configStore';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './styles';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackBarProvider } from 'modules';

const { store, persistor } = appStore();

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<SnackBarProvider>
						<GlobalStyles />
						<App />
					</SnackBarProvider>
				</ThemeProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
