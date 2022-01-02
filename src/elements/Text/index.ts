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

export const HeaderTitle = styled.h1`
	font: 600 24px/26px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.xs}) {
		font: 600 20px/24px 'Poppins';
	}
`;

export const MakeAppointmentHeaderTitle = styled(HeaderTitle)`
	margin-bottom: 30px;
`;
