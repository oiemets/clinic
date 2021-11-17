import styled from 'styled-components';
import bg from 'assets/bg.png';
import notFound from 'assets/404.png';

export const AuthPageWrapper = styled.div`
	display: flex;
	height: 100vh;
	min-width: 200px;

	@media screen and (max-height: ${({ theme: { breakpoints } }) =>
			breakpoints.md}) {
		min-height: 620px;
	}

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		min-height: 100vh;
	}
`;

export const AuthPageBg = styled.div`
	width: 100%;
	background-image: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		background-size: contain;
	}
`;

export const NotFoundBg = styled.div`
	width: 40%;
	aspect-ratio: 13/5;
	background-image: url(${notFound});
	background-size: contain;
	background-repeat: no-repeat;
`;

export const AuthNotFoundPageWrapper = styled(AuthPageWrapper)`
	flex-flow: column;
	justify-content: center;
	align-items: center;
	gap: 90px;
`;

export const AuthFormWrapper = styled.div`
	min-width: 560px;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme: { colors } }) => colors.lightGrey};

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		width: 100%;
		min-width: 200px;
		height: 85%;
		position: absolute;
		bottom: 0px;
	}

	@media screen and (max-height: ${({ theme: { breakpoints } }) =>
			breakpoints.md}) {
		min-height: 520px;
	}
`;

export const FormTextFieldsWrapper = styled.div`
	height: 100%;
	width: 70%;
	display: flex;
	justify-content: center;
	flex-flow: column;
	row-gap: 4%;
	button {
		margin-top: 20px;
	}
`;

export const AuthFooterWrapper = styled.div`
	gap: 10px;
	display: flex;
	min-width: 70%;
	margin-bottom: 10%;

	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		flex-flow: column;
		gap: 0px;
		margin-bottom: 44px;
	}
`;

export const PageWrapper = styled.div`
	background-color: ${({ theme: { colors } }) => colors.blueGrey};
	padding: 22px 64px;
	display: flex;
	flex-flow: column nowrap;
	gap: 20px;
	height: 100vh;
	@media screen and (max-width: ${({ theme: { breakpoints } }) =>
			breakpoints.sm}) {
		padding: 22px 0 0 0;
	}
`;

export const PageHeader = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.sm}) {
		padding: 0 22px;
	}
`;

export const InnerMainSection = styled.div`
	border: 1px solid red;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
