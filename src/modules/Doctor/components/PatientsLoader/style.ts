import styled from 'styled-components';
import { CardPatch } from 'assets';

export const LoaderWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	gap: 1%;
`;

export const LoaderIcon = styled(CardPatch)`
	width: 23%;
`;
