import styled from 'styled-components';
import angleDown from 'assets/icons/angle-down-select-res.svg';

export const SelectResolutionsWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
		display: none;
	}
`;

export const SelectResolutionsFieldWrapper = styled.div`
	display: flex;
	font: 400 17px/24px 'Poppins';
	cursor: pointer;
	background: url(${angleDown}) right 20px top 50%/12px no-repeat;
	background-size: 25px 25px;
	position: relative;
`;

export const SelectResolutionsTitle = styled.h3`
	min-width: 60px;
	font: 400 15px/21px 'Poppins';
	color: ${({ theme: { colors } }) => colors.mediumGrey};
`;

export const SelectResolutionsField = styled.select`
	width: 100px;
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
	color: ${({ theme: { colors } }) => colors.lightBlue};
`;
