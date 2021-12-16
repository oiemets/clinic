import { SelectDoctorWrapper, SelectDoctorFieldsWrapper } from './style';
import { SelectHeader } from '../SelectHeader';
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
			<SelectHeader
				number='1'
				title='Select a doctor and define the reason for your visit'
			/>
			<SelectDoctorFieldsWrapper>
				{selectData?.map(props => (
					<Select {...props} />
				))}

				{textFieldsData?.map(props => (
					<FormTextField {...props} />
				))}
			</SelectDoctorFieldsWrapper>
		</SelectDoctorWrapper>
	);
};
