import {
	UserAvatarWrapper,
	UserAvatarTitle,
	UserAvatarRole,
	UserIcon,
	UserAvatarTitleWrapper,
} from './style';

export type UserAvatarProps = {
	avatarTitle?: string;
	avatarUserRole?: string;
	avatarPhoto?: string;
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
	avatarTitle,
	avatarUserRole,
}) => {
	return (
		<UserAvatarWrapper>
			<UserAvatarTitleWrapper>
				<UserAvatarTitle>{avatarTitle}</UserAvatarTitle>
				<UserAvatarRole>{avatarUserRole}</UserAvatarRole>
			</UserAvatarTitleWrapper>
			<UserIcon />
		</UserAvatarWrapper>
	);
};
