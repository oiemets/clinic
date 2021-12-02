import { SnackbarProvider, SnackbarProviderProps } from 'notistack';
import { SnackBar } from '../components';

export const SnackBarProvider: React.FC<SnackbarProviderProps> = ({
	children,
	maxSnack,
	hideIconVariant,
}) => {
	return (
		<SnackbarProvider maxSnack={maxSnack} hideIconVariant={hideIconVariant}>
			{children}
			<SnackBar />
		</SnackbarProvider>
	);
};

SnackBarProvider.defaultProps = {
	maxSnack: 5,
	hideIconVariant: false,
};
