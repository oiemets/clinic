import styled from 'styled-components';

export const InnerWrapper = styled.div`
	background-color: ${({ theme: { colors } }) => colors.lightGrey};
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	border-radius: 16px;
	height: 100%;
	padding: 40px 40px 30px 40px;
	gap: 20px;
`;
