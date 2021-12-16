import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatientResolutionsSelector, getAllResolutions } from 'modules';
import { PatientPageHeader } from 'components';
import { InnerPageWrapper, HeaderTitle } from 'elements';
import { ResolutionsTable } from './components';

export const PatientResolutions = () => {
	const dispatch = useDispatch();
	const resolutions = useSelector(getAllPatientResolutionsSelector);

	useEffect(() => {
		dispatch(getAllResolutions());
	}, [dispatch]);

	return (
		<InnerPageWrapper>
			<PatientPageHeader isActive='resolutions' />
			<HeaderTitle>Resolutions</HeaderTitle>
			<ResolutionsTable data={resolutions} />
		</InnerPageWrapper>
	);
};

export * from './redux';
