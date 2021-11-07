import styled from 'styled-components';
import bg from '../../../assets/bg.png';

export const Container = styled.div`
	display: flex;

	@media screen and (min-height: 1034px) {
		height: 100vh;
	}
`;

export const Bg = styled.div`
	width: 100%;
	height: 100vh;
	display: inline-block;
	background-image: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: 560px) {
		background-size: contain;
	}
`;
