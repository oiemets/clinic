import styled from 'styled-components';
import { User } from 'assets';

export const ProfileWrapper = styled.div`
	display: flex;
	gap: 40px;
`;

export const ProfileTitleWrapper = styled.div`
	display: flex;
	flex-flow: column;
`;

export const ProfileTitle = styled.h1`
	font: 600 20px/24px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
`;

export const ProfileRole = styled.h2`
	font: 400 15px/21px 'Poppins';
	color: ${({ theme: { colors } }) => colors.mediumGrey};
`;

export const UserProfilePhoto = styled.img`
	object-fit: cover;
	border-radius: 16px;
	width: 136px;
	height: 136px;
`;

export const UserProfileIcon = styled(User)`
	color: ${({ theme: { colors } }) => colors.mediumGrey};
	width: 40px;
	height: 40px;

	& path {
		fill: currentColor;
	}
`;
