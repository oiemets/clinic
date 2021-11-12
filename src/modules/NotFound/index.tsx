import {
	NotFoundPageWrapper,
	Text,
	NotFoundBg,
	NotFoundTextWrapper,
} from 'elements';

export const NotFound = () => {
	return (
		<NotFoundPageWrapper>
			<NotFoundBg />
			<NotFoundTextWrapper>
				<Text>Oops...</Text>
				<Text>We can't seem to find the page you are looking for.</Text>
			</NotFoundTextWrapper>
		</NotFoundPageWrapper>
	);
};
