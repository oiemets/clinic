import styled from 'styled-components';
import { User } from 'assets';

export const UserAvatarWrapper = styled.div`
	display: flex;
	gap: 16px;
`;

export const UserAvatarTitleWrapper = styled.div`
	display: flex;
	flex-flow: column;
	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
		display: none;
	}
`;

export const UserAvatarTitle = styled.h1`
	font: 600 15px/19.5px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
`;

export const UserAvatarRole = styled.h2`
	font: 500 13px/16.9px 'Poppins';
	color: ${({ theme: { colors } }) => colors.mediumGrey};
	align-self: flex-end;
`;

export const UserIcon = styled(User)`
	color: ${({ theme: { colors } }) => colors.mediumGrey};
	width: 40px;
	height: 40px;

	& path {
		fill: currentColor;
	}
`;

export const UserPhoto = styled.img`
	object-fit: cover;
	border-radius: 50%;
	width: 40px;
	height: 40px;
`;
