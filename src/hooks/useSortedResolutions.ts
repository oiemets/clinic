import { useMemo, useState } from 'react';
import { Resolution } from 'types';
import { compareAsc, compareDesc } from 'date-fns';

type UseSortedResolutionsType = [
	data: Resolution[],
	onClick: (name: any) => void,
	sortingOrder: 'asc' | 'desc'
];

export const useSortedResolutions = (
	inputData: Resolution[]
): UseSortedResolutionsType => {
	const [sortBy, setSortBy] = useState('visitDate');
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

	const data = useMemo(() => {
		let resolutionsSorted = [...inputData];

		if (sortBy === 'firstName' || sortBy === 'lastName') {
			resolutionsSorted.sort((a, b) => {
				if (a.doctor[sortBy] < b.doctor[sortBy]) {
					return sortOrder === 'asc' ? -1 : 1;
				}
				if (a.doctor[sortBy] > b.doctor[sortBy]) {
					return sortOrder === 'asc' ? 1 : -1;
				}
				return 0;
			});
		}

		if (sortBy === 'visitDate' || sortBy === 'nextAppointmentDate') {
			resolutionsSorted.sort((a, b) => {
				const left = new Date(a[sortBy]);
				const right = new Date(b[sortBy]);
				return sortOrder === 'asc'
					? compareAsc(left, right)
					: compareDesc(left, right);
			});
		}

		return resolutionsSorted;
	}, [inputData, sortBy, sortOrder]);

	const headerOnClick = (name: any) => {
		setSortBy(name);
		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
	};

	return [data, headerOnClick, sortOrder];
};
