import styled from 'styled-components';
import { Email, User, Check, Lock, EyeSlash } from '../../assets';

export const StyledIcon = styled.span`
	color: ${({ theme: { colours }, color }) => colours[color ?? 'mediumGrey']};
	position: absolute;
	transform: translate(120%, 50%);

	& path {
		fill: currentColor;
	}
`;

export const StyledEyeSlashIcon = styled(EyeSlash)`
	color: ${({ theme: { colours }, color }) => colours[color ?? 'mediumGrey']};
	& path {
		fill: currentColor;
	}
	position: absolute;
	transform: translate(-200%, 50%);
`;

export const icons = {
	email: Email,
	user: User,
	check: Check,
	lock: Lock,
};

export const InputContainer = styled.div`
	width: 368px;
	margin-bottom: 10px;
	margin-top: 20px;
	position: relative;
`;

export const InputBar = styled.input`
	width: 100%;
	height: 56px;
	padding: 2px 15px 2px 80px;
	border-radius: 8px;
	border: 1px solid ${({ theme: { colours } }) => colours.solidGrey};
	font: 400 17px/24px 'Poppins';
	color: ${({ theme: { colours } }) => colours.black};
	outline: none;

	::placeholder {
		font: 400 17px/24px 'Poppins';
		color: ${({ theme: { colours } }) => colours.mediumGrey};
	}

	:hover {
		border: 1px solid ${({ theme: { colours } }) => colours.solidGrey};
	}

	:focus {
		border: 1px solid ${({ theme: { colours } }) => colours.lightBlue};
	}
`;
