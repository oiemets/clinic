import {
	PaginationWrapper,
	PagesList,
	Page,
	ArrowIcon,
	PaginationLabelWrapper,
	PaginationLabel,
	PaginationLabelInfo,
} from './style';

type PaginationProps = {
	numbers: number[];
	currentPageNumber: number;
	onClick: (pageNumber: number) => void;
	onArrowClick: (order: 'asc' | 'desc') => void;
};

export const Pagination: React.FC<PaginationProps> = ({
	numbers,
	currentPageNumber,
	onClick,
	onArrowClick,
}) => {
	return (
		<PaginationWrapper>
			<PaginationLabelWrapper>
				<PaginationLabel>Results:</PaginationLabel>
				<PaginationLabelInfo>1-8 of 18</PaginationLabelInfo>
			</PaginationLabelWrapper>
			<ArrowIcon icon='angleleft' onClick={() => onArrowClick('desc')} />
			<PagesList>
				{numbers?.map((n, i) => (
					<Page
						key={n + '-' + i}
						onClick={() => onClick(n)}
						active={currentPageNumber === n}
					>
						{n}
					</Page>
				))}
			</PagesList>
			<ArrowIcon icon='angleright' onClick={() => onArrowClick('asc')} />
		</PaginationWrapper>
	);
};
