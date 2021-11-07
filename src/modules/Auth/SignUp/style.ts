import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Root = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	min-width: 560px;
	background-color: ${({ theme: { colours } }) => colours.lightGrey};

	@media screen and (max-width: 560px) {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		min-width: 100%;
		height: 85vmax;
		position: absolute;
		bottom: 0;
	}
`;

export const FormContainer = styled.div`
	width: 80%;
	height: 100%;
	min-width: 250px;
	margin-top: 16.8vh;
	display: flex;
	flex-flow: column;

	div {
		margin-top: 2vh;
	}

	div:nth-child(2) {
		margin-top: 10vh;
	}

	button {
		margin-top: 7vh;
	}

	div:last-child {
		margin-top: 8vh;
		margin-bottom: 6vh;
	}

	@media screen and (max-width: 560px) {
		margin-top: 5vh;
		justify-content: space-around;
		height: 100%;
		div:nth-child(2) {
			margin-top: 2vh;
		}
	}
`;

export const Title = styled.h1`
	color: ${({ theme: { colours } }) => colours.black};
	font-weight: 600;
	font-size: 24px;
	line-height: 26.4px;
	text-transform: capitalize;

	@media screen and (max-width: 560px) {
		font-size: 20px;
		line-height: 24px;
	}
`;

export const StyledLink = styled(Link)`
	color: ${({ theme: { colours } }) => colours.lightBlue};
	font-weight: 600;
	font-size: 15px;
	line-height: 19.5px;
	margin-left: 12px;
	@media screen and (max-width: 560px) {
		flex-flow: column;
		margin-left: 0px;
	}
`;

export const SignInLink = styled.div`
	display: flex;
	color: ${({ theme: { colours } }) => colours.mediumGrey};
	font-weight: 400;
	font-size: 15px;
	line-height: 21px;
	@media screen and (max-width: 560px) {
		flex-flow: column;
	}
`;
