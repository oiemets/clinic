import { useFormik, FormikValues, FormikConfig } from 'formik';

export const useFormikTextFields = (
	formik: FormikConfig<FormikValues>,
	configFieldsProps: any
) => {
	const { initialValues, getFieldProps, touched, errors, handleSubmit } =
		useFormik(formik);

	const mapInitValues = Object.keys(initialValues);

	const textFieldProps = mapInitValues.map((v, i) => ({
		...getFieldProps(v),
		...configFieldsProps[v],
		key: v + '-' + i,
		errorMessage: touched[v] && errors[v] ? errors[v] : null,
		borderColor: touched[v] && errors[v] ? 'lightRed' : null,
		checked: touched[v] && !errors[v],
	}));

	const data: [
		any[],
		(e?: React.FormEvent<HTMLFormElement> | undefined) => void
	] = [textFieldProps, handleSubmit];

	return data;
};
