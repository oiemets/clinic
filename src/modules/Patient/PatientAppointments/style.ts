import styled from 'styled-components';

export const CardsContainer = styled.div`
	margin-top: 2em;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;

	@media (max-width: 1400px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 800px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
