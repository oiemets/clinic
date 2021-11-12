import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
	color: ${({ theme: { colors } }) => colors.black};
	font-weight: 600;
	font-size: 24px;
	line-height: 26.4px;
	text-transform: capitalize;

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		font-size: 20px;
		line-height: 24px;
	}
`;

export const StyledLink = styled(Link)`
	color: ${({ theme: { colors } }) => colors.lightBlue};
`;

export const TitleWithIconWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Text = styled.p``;

export const NotFoundTextWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-flow: column;
	align-items: center;
	text-align: center;
	font: 600 24px 'Poppins';
	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		font: 600 17px/22.1px 'Poppins';
	}
`;
