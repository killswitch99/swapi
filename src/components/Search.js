import styles from '../styles/Nav.module.scss'
const Search = ({ searchQuery, setSearchQuery }) => {
	return (
		<form action="/" method="get" className={styles.formstyles}>
			<label htmlFor="header-search"></label>
			<input
				value={searchQuery}
				onInput={(e) => setSearchQuery(e.target.value)}
				type="text"
				id="header-search"
				placeholder="Search blog posts"
				name="s"
			/>
			<button type="submit">Search</button>
		</form>
	)
}

export default Search
