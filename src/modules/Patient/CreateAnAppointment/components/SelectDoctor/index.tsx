import { SelectDoctorWrapper } from './style';
import { Select, FormTextField } from 'components';

type SelectDoctorProps = {
	selectData?: any[];
	textFieldsData?: any[];
};

export const SelectDoctor: React.FC<SelectDoctorProps> = ({
	selectData,
	textFieldsData,
}) => {
	return (
		<SelectDoctorWrapper>
			{selectData?.map(props => (
				<Select {...props} />
			))}

			{textFieldsData?.map(props => (
				<FormTextField {...props} />
			))}
		</SelectDoctorWrapper>
	);
};
