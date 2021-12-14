import styled from 'styled-components';
import { User, Clock, HeartReason, VerticalDots } from 'assets';

export const CardWrapper = styled.div`
	min-width: 300px;
	min-height: 200px;
	position: relative;
	background: ${({ theme: { colors } }) => colors.white};
	border-radius: 12px;
`;

export const DoctorAvatarWrapper = styled.div`
	display: flex;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.solidGrey};
	gap: 1em;
	align-items: center;
	padding: 20px;
`;

export const DoctorAvatar = styled.img`
	object-fit: cover;
	border-radius: 50%;
	width: 48px;
	height: 48px;
`;

export const DoctorAvatarTitleWrapper = styled.div`
	display: flex;
	flex-flow: column;
	gap: 5px;
`;

export const DoctorAvatarTitle = styled.h1`
	font: 600 15px/19.5px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
`;

export const DoctorAvatarRole = styled.h2`
	font: 500 13px/16.9px 'Poppins';
	color: ${({ theme: { colors } }) => colors.mediumGrey};
`;

export const UserIcon = styled(User)`
	color: ${({ theme: { colors } }) => colors.mediumGrey};
	width: 40px;
	height: 40px;

	& path {
		fill: currentColor;
	}
`;

export const ClockIcon = styled(Clock)`
	color: ${({ theme: { colors } }) => colors.solidGrey};
	width: 20px;
	height: 20px;

	& path {
		fill: currentColor;
	}
`;

export const HeartIcon = styled(HeartReason)`
	color: ${({ theme: { colors } }) => colors.solidGrey};
	width: 20px;
	height: 20px;

	& path {
		fill: currentColor;
	}
`;

export const InfoWrapper = styled.div`
	padding: 20px;
`;

export const TimeWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 18px;
	margin-bottom: 20px;
`;

export const TimeTitle = styled.h3`
	display: inline-block;
	color: ${({ theme: { colors } }) => colors.black};
	font: 600 15px/20px 'Poppins';
`;

export const ReasonWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 18px;
`;

export const ReasonTitle = styled.h3`
	display: inline-block;
	color: ${({ theme: { colors } }) => colors.black};
	font: 400 15px/21px 'Poppins';
`;

export const VerticalDotsOptions = styled(VerticalDots)`
	color: ${({ theme: { colors } }) => colors.solidGrey};
	width: 24px;
	height: 24px;
	position: absolute;
	right: 1em;
	top: 2em;

	& path {
		fill: currentColor;
		stroke: currentColor;
	}

	:hover {
		cursor: pointer;
	}
`;
