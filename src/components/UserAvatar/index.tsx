import { useState } from 'react';
import {
	UserAvatarWrapper,
	UserAvatarTitle,
	UserAvatarRole,
	UserIcon,
	UserAvatarTitleWrapper,
	UserPhoto,
} from './style';

export type UserAvatarProps = {
	avatarTitle?: string;
	avatarUserRole?: string;
	avatarPhoto?: string;
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
	avatarTitle,
	avatarUserRole,
	avatarPhoto,
}) => {
	const [photoLoaded, setPhotoLoaded] = useState(true);
	const onError = () => setPhotoLoaded(false);

	return (
		<UserAvatarWrapper>
			<UserAvatarTitleWrapper>
				<UserAvatarTitle>{avatarTitle}</UserAvatarTitle>
				<UserAvatarRole>{avatarUserRole}</UserAvatarRole>
			</UserAvatarTitleWrapper>

			{photoLoaded ? (
				<UserPhoto src={avatarPhoto} alt='user image' onError={onError} />
			) : (
				<UserIcon />
			)}
		</UserAvatarWrapper>
	);
};
