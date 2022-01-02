import {
	SelectResolutionsField,
	SelectResolutionsFieldWrapper,
	SelectResolutionsWrapper,
	SelectResolutionsTitle,
} from './style';
import { SortByType } from 'hooks';

type SelectResolutionsProps = {
	sortBy: SortByType;
	valueHandler: (name: any) => void;
};

const options = [
	{ value: 'firstName', label: 'First Name' },
	{ value: 'lastName', label: 'Last Name' },
	{ value: 'visitDate', label: 'Date' },
	{ value: 'nextAppointmentDate', label: 'Next Visit' },
];

export const SelectResolutions: React.FC<SelectResolutionsProps> = ({
	sortBy,
	valueHandler,
}) => {
	return (
		<SelectResolutionsWrapper>
			<SelectResolutionsTitle>Sort by:</SelectResolutionsTitle>
			<SelectResolutionsFieldWrapper>
				<SelectResolutionsField
					value={sortBy}
					onChange={e => valueHandler(e.target.value)}
				>
					{options.map(({ value, label }, i) => (
						<option key={value + '-' + i} value={value}>
							{label}
						</option>
					))}
				</SelectResolutionsField>
			</SelectResolutionsFieldWrapper>
		</SelectResolutionsWrapper>
	);
};
