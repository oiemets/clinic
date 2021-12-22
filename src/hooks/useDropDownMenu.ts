import { useState, useEffect, RefObject } from 'react';

type UseDropDownMenuProps = {
	elementRef: RefObject<HTMLDivElement>;
};

type UseDrownMenuType = [
	boolean,
	React.Dispatch<React.SetStateAction<boolean>>
];

export const useDropDownMenu = (
	elementRef: UseDropDownMenuProps['elementRef']
): UseDrownMenuType => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const clickEvent = (e: any) => {
			if (
				elementRef.current !== null &&
				!elementRef.current.contains(e.target)
			) {
				setIsActive(active => !active);
			}
		};
		if (isActive) {
			window.addEventListener('click', clickEvent);
		}

		return () => {
			window.removeEventListener('click', clickEvent);
		};
	}, [isActive, elementRef]);

	return [isActive, setIsActive];
};
