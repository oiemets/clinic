import { SelectDoctorContainer, SelectWrapper, SelectTitle } from './style';
import Select from 'react-select';
import { FormTextField } from 'components';
import { FormikHandlers, FormikErrors, FormikTouched } from 'formik';
import { SelectHeader } from '../SelectHeader';
import { FieldsValues, SelectValueType } from '../../index';

type SelectOptionsType = { value: string; label: string };

type SelectDoctorProps = {
	handleChange?: FormikHandlers['handleChange'];
	specializationsSelectOptions?: SelectOptionsType[];
	doctorsSelectOptions?: SelectOptionsType[];
	specialtyOnChangeHandler?: (option: any) => void;
	doctorOnChangeHandler?: (option: any) => void;
	doctorSelectValue?: SelectValueType;
	specialtySelectValue?: SelectValueType;
	errors: FormikErrors<FieldsValues>;
	touched: FormikTouched<FieldsValues>;
};

export const SelectDoctor = ({
	handleChange,
	specializationsSelectOptions,
	doctorsSelectOptions,
	doctorOnChangeHandler,
	specialtyOnChangeHandler,
	doctorSelectValue,
	specialtySelectValue,
	errors,
	touched,
}: SelectDoctorProps) => {
	return (
		<SelectDoctorContainer>
			<SelectHeader
				number='1'
				title='Select a doctor and define the reason for your visit'
			/>
			<SelectWrapper>
				<SelectTitle>Occupation</SelectTitle>
				<Select
					classNamePrefix='doctor-select'
					className='doctor-select-container'
					options={specializationsSelectOptions}
					onChange={specialtyOnChangeHandler}
					isSearchable={false}
					value={specialtySelectValue}
					placeholder='Select specialty'
				/>
			</SelectWrapper>
			<SelectWrapper>
				<SelectTitle>Doctor's Name</SelectTitle>
				<Select
					classNamePrefix='doctor-select'
					className='doctor-select-container'
					options={doctorsSelectOptions}
					onChange={doctorOnChangeHandler}
					isSearchable={false}
					value={doctorSelectValue}
					placeholder='Select doctor'
				/>
			</SelectWrapper>

			<FormTextField
				title='Reason for the visit'
				name='reason'
				onChange={handleChange}
				errorMessage={
					touched['reason'] && errors['reason'] ? errors['reason'] : null
				}
				borderColor={touched['reason'] && errors['reason'] ? 'lightRed' : null}
			/>
			<FormTextField
				title='Note'
				name='note'
				onChange={handleChange}
				errorMessage={touched['note'] && errors['note'] ? errors['note'] : null}
				borderColor={touched['note'] && errors['note'] ? 'lightRed' : null}
			/>
		</SelectDoctorContainer>
	);
};
