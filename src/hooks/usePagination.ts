import { useState } from 'react';

export const usePagination = <T>(
	items: T[],
	offset: number = 8
): [
	T[],
	number,
	number[],
	(pageNumber: number) => void,
	(order: 'asc' | 'desc') => void
] => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(offset);

	const lastItem = currentPage * itemsPerPage;
	const firstItem = lastItem - itemsPerPage;

	const data = items.slice(firstItem, lastItem);

	const pageNumbers = () => {
		const result = [];
		for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
			result.push(i);
		}
		return result;
	};

	const onPageClick = (pageNumber: number) => setCurrentPage(pageNumber);
	const onArrowClick = (order: 'asc' | 'desc') => {
		if (order === 'asc' && currentPage < pageNumbers().length) {
			setCurrentPage(c => c + 1);
		}

		if (order === 'desc' && currentPage > 1) {
			setCurrentPage(c => c - 1);
		}
	};

	return [data, currentPage, pageNumbers(), onPageClick, onArrowClick];
};
