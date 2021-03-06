import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import WebFont from 'webfontloader';
import { theme } from './theme';

type CreateGlobalStyleProps = {
	theme: typeof theme;
};

WebFont.load({
	google: {
		families: ['Poppins:400,500,600', 'sans-serif'],
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
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
    font: 400 15px 'Poppins';
    color: ${({ theme: { colors } }) => colors.mediumGrey};
    width: 100%;
    height: 100%;
  }

  a {
    font-weight: 600;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    text-decoration: none;
  }

`;
