import styled from 'styled-components';
import { Link } from 'react-router-dom';
type MenuProps = {
	active?: boolean;
};

export const DropDownMenuWrapper = styled.div`
	position: relative;
	width: max-content;

	:hover {
		cursor: pointer;
	}
`;

export const Menu = styled.nav<MenuProps>`
	background: ${({ theme: { colors } }) => colors.white};
	border-radius: 8px;
	position: absolute;
	right: 30px;
	width: 270px;
	padding: 4px;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
	${({ active }) =>
		active
			? {
					opacity: '1',
					visibility: 'visible',
					transform: 'translateY(0)',
			  }
			: {
					opacity: '0',
					visibility: 'hidden',
					transform: 'translateY(-20px)',
			  }}

	transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

export const MenuList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const MenuItem = styled.li`
	font: 400 15px/21px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
	border-radius: 6px;
	padding: 10px 20px;

	:hover {
		cursor: pointer;
		background: ${({ theme: { colors } }) => colors.lightGrey};
	}
`;

export const MenuLink = styled(Link)`
	text-decoration: none;
	font: 400 15px/21px 'Poppins';
	color: ${({ theme: { colors } }) => colors.black};
	display: block;
`;
