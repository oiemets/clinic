import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatientResolutionsSelector, getAllResolutions } from 'modules';
import { PatientPageHeader } from 'components';
import { InnerPageWrapper, HeaderTitle } from 'elements';
import { ResolutionsPageHeader } from './style';
import { ResolutionsTable, Search } from './components';
import { useSortedResolutions } from 'hooks';

export const PatientResolutions = () => {
	const dispatch = useDispatch();
	const resolutions = useSelector(getAllPatientResolutionsSelector);

	useEffect(() => {
		dispatch(getAllResolutions());
	}, [dispatch]);

	const [data, sortingOrder, searchValue, onClick, onChange] =
		useSortedResolutions(resolutions);

	return (
		<InnerPageWrapper>
			<PatientPageHeader isActive='resolutions' />
			<ResolutionsPageHeader>
				<HeaderTitle>Resolutions</HeaderTitle>
				<Search searchValue={searchValue} onChange={onChange} />
			</ResolutionsPageHeader>
			<ResolutionsTable
				data={data}
				headerClick={onClick}
				sortingOrder={sortingOrder}
			/>
		</InnerPageWrapper>
	);
};

export * from './redux';
