import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatientResolutionsSelector, getAllResolutions } from 'modules';
import { PatientPageHeader } from 'components';
import { InnerPageWrapper, HeaderTitle } from 'elements';
import { ResolutionsPageHeader, SortWrapper } from './style';
import {
	ResolutionsTable,
	Search,
	SelectResolutions,
	Pagination,
} from './components';
import { useSortedResolutions, usePagination } from 'hooks';

export const PatientResolutions = () => {
	const dispatch = useDispatch();
	const resolutions = useSelector(getAllPatientResolutionsSelector);

	useEffect(() => {
		dispatch(getAllResolutions());
	}, [dispatch]);

	const [
		resolutionsData,
		sortingOrder,
		sortBy,
		searchValue,
		onClick,
		onChange,
	] = useSortedResolutions(resolutions);

	const [data, currentPageNumber, pageNumbers, onPageClick, onArrowClick] =
		usePagination(resolutionsData);

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
			{resolutions.length < 8 ? null : (
				<Pagination
					numbers={pageNumbers}
					currentPageNumber={currentPageNumber}
					onClick={onPageClick}
					onArrowClick={onArrowClick}
				/>
			)}
		</InnerPageWrapper>
	);
};

export * from './redux';
