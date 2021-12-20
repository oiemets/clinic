import {
	SelectResolutionsField,
	SelectResolutionsFieldWrapper,
	SelectResolutionsWrapper,
	SelectResolutionsTitle,
} from './style';
import { SortByType } from 'hooks';
import _ from 'lodash';

type SelectResolutionsProps = {
	sortBy: SortByType;
	valueHandler: (name: any) => void;
};

type Options = { value: string; label: string }[];

const selectResolutionsOptions = {
	firstName: { value: 'firstName', label: 'First Name' },
	lastName: { value: 'lastName', label: 'Last Name' },
	visitDate: { value: 'visitDate', label: 'Date' },
	nextAppointmentDate: { value: 'nextAppointmentDate', label: 'Next Visit' },
};

export const SelectResolutions: React.FC<SelectResolutionsProps> = ({
	sortBy,
	valueHandler,
}) => {
	const add: Options = Object.values(_.omit(selectResolutionsOptions, sortBy));

	const options: Options = [selectResolutionsOptions[sortBy], ...add];

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
