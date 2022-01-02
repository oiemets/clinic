import { useFormik, FormikValues, FormikConfig, FormikHandlers } from 'formik';

export type UseFormikTextFieldsData = [
	any[],
	FormikHandlers['handleSubmit'],
	FormikHandlers['handleChange']
];

export const useFormikTextFields = (
	formik: FormikConfig<FormikValues>,
	configFieldsProps: any
) => {
	const {
		initialValues,
		getFieldProps,
		touched,
		errors,
		handleSubmit,
		handleChange,
	} = useFormik(formik);

	const mapInitValues = Object.keys(initialValues);

	const textFieldProps = mapInitValues.map((v, i) => ({
		...getFieldProps(v),
		...configFieldsProps[v],
		key: v + '-' + i,
		errorMessage: touched[v] && errors[v] ? errors[v] : null,
		borderColor: touched[v] && errors[v] ? 'lightRed' : null,
		checked: touched[v] && !errors[v],
	}));

	const data: UseFormikTextFieldsData = [
		textFieldProps,
		handleSubmit,
		handleChange,
	];

	return data;
};
