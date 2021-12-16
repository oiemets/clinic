import styled from 'styled-components';
import { ArrowUp, ArrowDown } from 'assets';

type THeaderProps = {
	width?: number;
};

type THeaderLabelWrapperProps = {
	sortable?: boolean;
};

export const TableWrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
`;

export const Table = styled.table`
	border-collapse: separate;
	width: 100%;
	border-spacing: 0 4px;

	tr:first-child th:first-child {
		border-top-left-radius: 12px;
		border-bottom-left-radius: 4px;
	}

	tr:first-child th:last-child {
		border-top-right-radius: 12px;
		border-bottom-right-radius: 4px;
	}
`;

export const THead = styled.thead`
	font: 400 15px/24px 'Poppins';
	color: ${({ theme: { colors } }) => colors.mediumGrey};
`;

export const TRow = styled.tr``;

export const THeader = styled.th<THeaderProps>`
	background: ${({ theme: { colors } }) => colors.white};
	width: ${({ width }) => width + '%'};
	min-width: 190px;
	padding: 36px;
`;

export const THeaderLabel = styled.h3``;

export const THeaderLabelWrapper = styled.div<THeaderLabelWrapperProps>`
	display: flex;
	gap: 0.5em;

	:hover {
		cursor: ${({ sortable }) => (sortable ? 'pointer' : 'unset')};
	}
`;

export const TBody = styled.tbody``;

export const TData = styled.td`
	background: ${({ theme: { colors } }) => colors.white};
	font: 400 17px/24px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
	border-radius: 4px;
	padding: 34px;
`;

export const ArrowUpIcon = styled(ArrowUp)`
	color: ${({ theme: { colors } }) => colors.mediumGrey};

	& path {
		fill: currentColor;
	}
`;

export const ArrowDownIcon = styled(ArrowDown)`
	color: ${({ theme: { colors } }) => colors.mediumGrey};

	& path {
		fill: currentColor;
	}
`;
