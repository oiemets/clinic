import { SearchWrapper, SearchField, SearchIcon } from './style';

type SearchProps = {
	searchValue: string;
	onChange: (query: string) => void;
};

export const Search: React.FC<SearchProps> = ({ searchValue, onChange }) => {
	return (
		<SearchWrapper>
			<SearchField
				placeholder='Search'
				value={searchValue}
				onChange={e => onChange(e.target.value)}
			/>
			<SearchIcon />
		</SearchWrapper>
	);
};
