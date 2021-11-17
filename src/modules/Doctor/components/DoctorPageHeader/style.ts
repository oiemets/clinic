import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: space-evenly;
	width: 100%;
	min-height: 170px;
`;

export const HeaderTitle = styled.h1`
	font: 600 24px/26.4px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	gap: 12px;
	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.xs}) {
		justify-content: center;
	}
`;
