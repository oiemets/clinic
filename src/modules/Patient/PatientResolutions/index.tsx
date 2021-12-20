import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatientResolutionsSelector, getAllResolutions } from 'modules';
import { PatientPageHeader } from 'components';
import { InnerPageWrapper, HeaderTitle } from 'elements';
import { ResolutionsPageHeader, SortWrapper } from './style';
import { ResolutionsTable, Search, SelectResolutions } from './components';
import { useSortedResolutions } from 'hooks';

export const PatientResolutions = () => {
	const dispatch = useDispatch();
	const resolutions = useSelector(getAllPatientResolutionsSelector);

	useEffect(() => {
		dispatch(getAllResolutions());
	}, [dispatch]);

	const [data, sortingOrder, sortBy, searchValue, onClick, onChange] =
		useSortedResolutions(resolutions);

	return (
		<InnerPageWrapper>
			<PatientPageHeader isActive='resolutions' />
			<ResolutionsPageHeader>
				<HeaderTitle>Resolutions</HeaderTitle>
				<SortWrapper>
					<Search searchValue={searchValue} onChange={onChange} />
					<SelectResolutions sortBy={sortBy} valueHandler={onClick} />
				</SortWrapper>
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
