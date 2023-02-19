import { BiSearchAlt } from 'react-icons/bi';
export const SearchForm = () => {
	return (
		<form className="search js-search-form">
			<input
				type="text"
				className="input-search js-search-form-input"
				placeholder="Movie search"
				name="searchQuery"
				autocomplete="off"
			/>

			<button className="btn-search js-search-form-button" type="submit">
                <BiSearchAlt/>
			</button>
			<span className="search-txt js-search-badResult">
				Search result not successful. Enter the correct movie name and click
				search.
			</span>
		</form>
	);
};
