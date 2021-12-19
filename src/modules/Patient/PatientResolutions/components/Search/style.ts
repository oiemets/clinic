import styled from 'styled-components';
import { Search } from 'assets';

export const SearchWrapper = styled.div`
	min-width: 100px;
	position: relative;
	display: flex;
`;

export const SearchField = styled.input`
	width: 100%;
	padding: 2px 15px 2px 45px;
	border: 2px solid transparent;
	border-radius: 20px;
	outline: none;
	color: ${({ theme: { colors } }) => colors.mediumGrey};
	font: 400 15px/21px 'Poppins';
	background-color: transparent;

	::placeholder {
		color: ${({ theme: { colors } }) => colors.mediumGrey};
		font: 400 15px/21px 'Poppins';
	}
`;

export const SearchIcon = styled(Search)`
	width: 20px;
	height: 20px;
	position: absolute;
	top: 5px;
	left: 10px;
	border: none;
	color: ${({ theme: { colors } }) => colors.mediumGrey};

	& path {
		fill: currentColor;
		stroke: currentColor;
	}
`;
