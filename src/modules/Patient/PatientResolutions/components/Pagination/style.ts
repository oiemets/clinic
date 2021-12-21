import styled from 'styled-components';
import { Icon } from 'components';

type PageProps = {
	active?: boolean;
};

export const PaginationWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 25px;
	padding: 24px 0;
	border-radius: 4px;
`;

export const PaginationLabelWrapper = styled.div``;

export const PaginationLabelInfo = styled.h3`
	font: 400 15px/21px 'Poppins';
	color: ${({ theme: { colors } }) => colors.mediumGrey};
	padding: 0 15px;
	display: inline-block;
`;
export const PaginationLabel = styled(PaginationLabelInfo)`
	@media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
		display: none;
	}
`;

export const PagesList = styled.ul`
	display: flex;
`;

export const Page = styled.li<PageProps>`
	display: inline-block;
	padding: 10px 16px;
	font: ${({ active }) =>
		active ? "600 15px/20px 'Poppins'" : "400 15px/21px 'Poppins'"};
	color: ${({ theme: { colors }, active }) =>
		active ? colors.white : colors.mediumGrey};

	min-width: 32px;
	min-height: 32px;
	border-radius: 6px;

	background-color: ${({ theme: { colors }, active }) =>
		active ? colors.lightBlue : 'unset'};

	:hover {
		cursor: pointer;
	}
`;

export const ArrowIcon = styled(Icon)`
	:hover {
		cursor: pointer;
	}
`;
