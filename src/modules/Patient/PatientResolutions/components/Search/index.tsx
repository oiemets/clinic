import { SearchWrapper } from './style';

type SearchProps = {
	onSearch?: (query: string) => void;
};

export const Search: React.FC<SearchProps> = () => {
	return <SearchWrapper></SearchWrapper>;
};
