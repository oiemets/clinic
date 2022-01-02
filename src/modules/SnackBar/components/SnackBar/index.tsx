import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { snackBarSelector } from '../../redux';

// import styled from 'styled-components';

// const TestCustomSnackBar = styled.div`
// 	background: red;
// 	color: white;
// `;

export const SnackBar = () => {
	const { enqueueSnackbar } = useSnackbar();
	const snackBarData = useSelector(snackBarSelector);

	useEffect(() => {
		if (snackBarData?.message) {
			enqueueSnackbar(snackBarData?.message, {
				variant: snackBarData?.type,
				// content: message => <TestCustomSnackBar children={message} />,
			});
		}
	}, [enqueueSnackbar, snackBarData]);

	return <></>;
};
