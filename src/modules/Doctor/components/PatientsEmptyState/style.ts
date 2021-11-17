import styled from 'styled-components';

export const EmptyStateWrapper = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	gap: 40px;
`;

export const EmptyStateText = styled.h3`
	color: ${({ theme: { colors } }) => colors.mediumGrey};
	font: 400 15px/21px 'Poppins';
`;

export const EmptyStateTextWrapper = styled.div`
	text-align: center;
`;
