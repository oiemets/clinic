import styled from 'styled-components';
import { VerticalDots } from 'assets';

export const VerticalDotsIcon = styled(VerticalDots)`
	& path {
		fill: currentColor;
		stroke: currentColor;
	}
`;

export const VerticalDotsIconWrapper = styled.div`
	color: ${({ theme: { colors } }) => colors.solidGrey};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 6px;

	:hover {
		color: ${({ theme: { colors } }) => colors.lightBlue};
		background: ${({ theme: { colors } }) => colors.lightGrey};
	}
`;

export const ActionsIcon = () => (
	<VerticalDotsIconWrapper>
		<VerticalDotsIcon />
	</VerticalDotsIconWrapper>
);
