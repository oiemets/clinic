import { Resolution } from 'types';
import {
	Table,
	THead,
	TRow,
	THeader,
	ArrowUpIcon,
	ArrowDownIcon,
	THeaderLabel,
	THeaderLabelWrapper,
	TBody,
	TData,
	TableWrapper,
} from './style';
import { resolutionTableDateFormat } from 'utils';

type ResolutionsTableProps = {
	data?: Resolution[];
	sortingOrder?: 'asc' | 'desc';
	input?: string;
	currentIndex?: number;
	headerClick: (name: any) => void;
	rowClick?: (index: number) => void;
};

const resolutionsHeaders = [
	{ label: 'First Name', id: 'firstName', width: 15 },
	{ label: 'Last Name', id: 'lastName', width: 15 },
	{ label: 'Resolution', id: '', width: 30 },
	{ label: 'Visit Date', id: 'visitDate', width: 15 },
	{ label: 'Next Visit', id: 'nextAppointmentDate', width: 15 },
	{ label: 'Actions', id: '', width: 10 },
];

const orderIcon = (order?: string) => {
	if (order === 'asc') {
		return <ArrowDownIcon />;
	}
	if (order === 'desc') {
		return <ArrowUpIcon />;
	}
};

export const ResolutionsTable: React.FC<ResolutionsTableProps> = ({
	data,
	sortingOrder,
	headerClick,
}) => {
	return (
		<TableWrapper>
			<Table>
				<THead>
					<TRow>
						{resolutionsHeaders.map(({ label, id, width }, i) => (
							<THeader key={id + '-' + i} width={width}>
								<THeaderLabelWrapper
									sortable={id !== ''}
									{...(id !== '' && { onClick: () => headerClick(id) })}
								>
									<THeaderLabel>{label}</THeaderLabel>
									{id !== '' ? orderIcon(sortingOrder) : null}
								</THeaderLabelWrapper>
							</THeader>
						))}
					</TRow>
				</THead>
				<TBody>
					{data?.map(
						(
							{
								doctor: { firstName, lastName },
								resolution,
								visitDate,
								nextAppointmentDate,
							},
							i
						) => (
							<TRow key={visitDate + '-' + i}>
								<TData>{firstName}</TData>
								<TData>{lastName}</TData>
								<TData>{resolution}</TData>
								<TData>{resolutionTableDateFormat(visitDate)}</TData>
								<TData>{resolutionTableDateFormat(nextAppointmentDate)}</TData>
								<TData></TData>
							</TRow>
						)
					)}
				</TBody>
			</Table>
		</TableWrapper>
	);
};
