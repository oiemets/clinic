import {
	SelectWrapper,
	SelectFieldWrapper,
	SelectField,
	SelectTitle,
	ErrorMessage,
} from './style';
import { Colors } from 'styles';

export type SelectValue = string | number;

export type SelectDoctor = { value: SelectValue; text: string };

export type SelectProps = {
	options?: SelectDoctor[];
	title?: string;
	value?: SelectValue;
	onChange?: (e: any) => void;
	name?: string;
	errorMessage?: string | null;
	borderColor?: Colors | null;
	checked?: boolean;
};

export const Select: React.FC<SelectProps> = ({
	title,
	options,
	value,
	onChange,
	name,
	errorMessage,
	borderColor,
	checked,
	...rest
}) => {
	return (
		<SelectWrapper>
			<SelectTitle>{title}</SelectTitle>
			<SelectFieldWrapper borderColor={borderColor} checked={checked}>
				<SelectField value={value} onChange={onChange} name={name} {...rest}>
					{options
						? options.map((o, i) => (
								<option key={o.value + '--' + i} value={o.value}>
									{o.text}
								</option>
						  ))
						: null}
				</SelectField>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</SelectFieldWrapper>
		</SelectWrapper>
	);
};
