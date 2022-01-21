import { SelectWrapper, SelectTitle, ErrorMessage } from './style';
import ReactSelect from 'react-select';

type SelectProps = {
	title?: string;
	placeholder?: string;
	options?: { value: string; label: string }[];
	errorMessage?: string;
	name?: string;
	onChange?: (option: any) => void;
	value?: {
		value: string;
		label: string;
	} | null;
};

export const Select = ({
	title,
	placeholder,
	options,
	errorMessage,
	onChange,
	value,
	...rest
}: SelectProps) => {
	return (
		<SelectWrapper isError={!!errorMessage}>
			<SelectTitle>{title}</SelectTitle>
			<ReactSelect
				classNamePrefix='select'
				className='select-container'
				placeholder={placeholder}
				isSearchable={false}
				options={options}
				onChange={onChange}
				value={value}
				{...rest}
			/>
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</SelectWrapper>
	);
};
