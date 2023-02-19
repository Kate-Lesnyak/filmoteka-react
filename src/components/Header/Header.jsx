import { Navigation } from "./Navigation/Navigation";
import { SearchForm } from "./SearchForm/SearchForm";
import { FiFilm } from 'react-icons/fi';
import { StyledHeader, StyledHeaderContainer } from './Header.styled';

export const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<a className="logo-link link">
					<FiFilm/>
					<p className="logo-txt">Filmoteka</p>
				</a>
				<SearchForm />
				<Navigation />
			</StyledHeaderContainer>
		</StyledHeader>
	);
};
