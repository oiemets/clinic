import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import WebFont from 'webfontloader';
import { theme } from './theme';

type CreateGlobalStyleProps = {
	theme: typeof theme;
};

WebFont.load({
	google: {
		families: ['Poppins:400,600', 'sans-serif'],
	},
});

export const GlobalStyles = createGlobalStyle<CreateGlobalStyleProps>`
  ${reset}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    background-color: ${({ theme: { colours } }) => colours.lightGrey};
    font: 400 15px/21px 'Poppins';
    color: ${({ theme: { colours } }) => colours.mediumGrey};
  }

  a {
    font-weight: 600;
    line-height: 19.5px;
    color: ${({ theme: { colours } }) => colours.darkBlue};
  }

`;
