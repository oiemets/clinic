import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from './store/configStore';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './styles';

const store = appStore();

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
