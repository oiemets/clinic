import { useRef } from 'react';
import {
	DropDownMenuWrapper,
	Menu,
	MenuList,
	MenuItem,
	MenuLink,
} from './style';
import { useDropDownMenu } from 'hooks';

type DropDownMenuProps = {
	menuItems?: {
		label: string;
		linkTo?: string;
		onClick?: (event: React.MouseEvent<HTMLElement>) => void;
	}[];
	element: JSX.Element;
};

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
	menuItems,
	children,
	element,
}) => {
	const dropdownMenuRef = useRef(null);
	const [isActive, setIsActive] = useDropDownMenu(dropdownMenuRef);

	return (
		<DropDownMenuWrapper>
			<div onClick={() => setIsActive(a => !a)}>{element}</div>
			<Menu active={isActive} ref={dropdownMenuRef}>
				<MenuList>
					{menuItems?.map(({ label, linkTo, onClick }, index) => (
						<MenuItem
							key={label + '-' + index}
							onClick={e => {
								setIsActive(a => !a);
								if (onClick) {
									onClick(e);
								}
							}}
						>
							{linkTo ? <MenuLink to={linkTo}>{label}</MenuLink> : label}
						</MenuItem>
					))}
					{children}
				</MenuList>
			</Menu>
		</DropDownMenuWrapper>
	);
};
