import styled from 'styled-components';
import angleDown from 'assets/icons/angle-down.svg';
import { Colors } from 'styles';

type SelectFieldWrapperProps = {
	borderColor?: Colors | null;
	checked?: boolean;
};

export const SelectWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	gap: 16px;
`;

export const SelectFieldWrapper = styled.div<SelectFieldWrapperProps>`
	display: flex;
	width: 100%;
	min-width: 100px;
	border-radius: 8px;
	border: 1px solid
		${({ theme: { colors }, borderColor }) =>
			colors[borderColor ?? 'solidGrey']};
	font: 400 17px/24px 'Poppins';
	cursor: pointer;
	padding: 1em 0;
	background: url(${angleDown}) right 10px top 50%/12px no-repeat;
	background-size: 25px 25px;
	background-color: #fff;
	position: relative;
`;

export const SelectField = styled.select`
	width: 100%;
	text-overflow: ellipsis;
	padding: 0 32px 0 10px;
	appearance: none;
	background-color: transparent;
	border: none;
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	cursor: inherit;
	outline: none;
	box-sizing: border-box;
`;

export const SelectTitle = styled.h3`
	font: 500 13px/17px 'Poppins';
	color: #000000;
`;

export const ErrorMessage = styled.div`
	position: absolute;
	bottom: -20px;
	font: 400 13px/15.6px 'Poppins';
	color: ${({ theme: { colors } }) => colors.lightRed};

	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
		bottom: -15px;
		font-size: 10px;
	}
`;
