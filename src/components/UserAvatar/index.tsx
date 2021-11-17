import {
	UserAvatarWrapper,
	UserAvatarTitle,
	UserAvatarRole,
	UserIcon,
	UserAvatarTitleWrapper,
} from './style';

export const UserAvatar = () => {
	return (
		<UserAvatarWrapper>
			<UserAvatarTitleWrapper>
				<UserAvatarTitle>Miranda Nelson</UserAvatarTitle>
				<UserAvatarRole>doctor</UserAvatarRole>
			</UserAvatarTitleWrapper>
			<UserIcon />
		</UserAvatarWrapper>
	);
};
