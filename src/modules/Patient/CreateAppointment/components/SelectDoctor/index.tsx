import { SelectDoctorContainer } from './style';
import Select from 'react-select';
import { FormTextField } from 'components';
import { FormikHandlers } from 'formik';
import { SelectHeader } from '../SelectHeader';

type SelectOptionsType = { value: string; label: string };

type SelectDoctorProps = {
	// setFieldHandler: FormikHelpers<FormikValues>['setFieldValue'];

	handleChange?: FormikHandlers['handleChange'];
	specializationsSelectOptions?: SelectOptionsType[];
	doctorsSelectOptions?: SelectOptionsType[];
	specialtyOnChangeHandler?: (option: any) => void;
	doctorOnChangeHandler?: (option: any) => void;
};

export const SelectDoctor = ({
	handleChange,
	specializationsSelectOptions,
	doctorsSelectOptions,
	doctorOnChangeHandler,
	specialtyOnChangeHandler,
}: SelectDoctorProps) => {
	return (
		<SelectDoctorContainer>
			<SelectHeader
				number='1'
				title='Select a doctor and define the reason for your visit'
			/>
			<Select
				classNamePrefix='specialty-select'
				className='specialty-select-container'
				options={specializationsSelectOptions}
				onChange={specialtyOnChangeHandler}
				isSearchable={false}
			/>
			<Select
				classNamePrefix='doctor-select'
				className='doctor-select-container'
				options={doctorsSelectOptions}
				onChange={doctorOnChangeHandler}
				isSearchable={false}
			/>

			<FormTextField name='reason' onChange={handleChange} />
			<FormTextField name='note' onChange={handleChange} />
		</SelectDoctorContainer>
	);
};
