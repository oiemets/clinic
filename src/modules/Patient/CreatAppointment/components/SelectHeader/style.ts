import styled from 'styled-components';

export const SelectHeaderWrapper = styled.div`
	color: ${({ theme: { colors } }) => colors.mediumGrey};
	font: 400 17px/24px 'Poppins';
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	margin-bottom: 20px;
`;

export const SelectHeaderNumber = styled.div`
	min-width: 2em;
	height: 2em;
	line-height: 2em;
	text-align: center;
	border: 1px solid;
	border-radius: 50%;
	margin-right: 1em;
`;

export const SelectHeaderTitle = styled.h1``;
