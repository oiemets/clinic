import {
	SelectHeaderNumber,
	SelectHeaderWrapper,
	SelectHeaderTitle,
} from './style';

type SelectHeaderProps = {
	number?: string;
	title?: string;
};

export const SelectHeader: React.FC<SelectHeaderProps> = ({
	number,
	title,
}) => {
	return (
		<SelectHeaderWrapper>
			<SelectHeaderNumber>{number}</SelectHeaderNumber>
			<SelectHeaderTitle>{title}</SelectHeaderTitle>
		</SelectHeaderWrapper>
	);
};
