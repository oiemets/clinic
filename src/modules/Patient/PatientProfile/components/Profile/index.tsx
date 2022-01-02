import { useState } from 'react';

import {
	ProfileWrapper,
	ProfileTitleWrapper,
	ProfileTitle,
	ProfileRole,
	UserProfilePhoto,
	UserProfileIcon,
} from './style';

export type ProfileProps = {
	title?: string;
	role?: string;
	photo?: string;
};

export const Profile: React.FC<ProfileProps> = ({ title, role, photo }) => {
	const [isImgLoaded, setIsImgLoaded] = useState(true);
	const onError = () => setIsImgLoaded(false);
	return (
		<ProfileWrapper>
			{isImgLoaded ? (
				<UserProfilePhoto src={photo} alt='profile photo' onError={onError} />
			) : (
				<UserProfileIcon />
			)}

			<ProfileTitleWrapper>
				<ProfileTitle>{title}</ProfileTitle>
				<ProfileRole>{role}</ProfileRole>
			</ProfileTitleWrapper>
		</ProfileWrapper>
	);
};
