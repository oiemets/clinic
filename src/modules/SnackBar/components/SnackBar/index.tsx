import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { snackBarSelector } from '../../redux';

export const SnackBar = () => {
	const { enqueueSnackbar } = useSnackbar();
	const snackBarData = useSelector(snackBarSelector);
	useEffect(() => {
		if (snackBarData?.message) {
			enqueueSnackbar(snackBarData?.message, {
				variant: snackBarData?.type,
			});
		}
	}, [enqueueSnackbar, snackBarData]);

	return <></>;
};
