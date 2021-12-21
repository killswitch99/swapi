import MovieItem from './MovieItem'
import { useEffect, useState } from 'react'
import styles from '../styles/Nav.module.scss'
import Search from '../components/Search'

const MovieList = () => {
	const [movies, setmovies] = useState([])
	const { search } = window.location
	const query = new URLSearchParams(search).get('s')
	const [searchQuery, setSearchQuery] = useState(query || '')
	const fetchMovies = async () => {
		let res = await fetch(`https://www.swapi.tech/api/films/`)
		let data = await res.json()
		setmovies(data.result)
	}
	const filterPosts = (items, query) => {
		if (!query) {
			return items
		}
		return items.filter((item) => {
			const movie = item.properties.title.toLowerCase()
			return movie.includes(query)
		})
	}

	useEffect(() => {
		fetchMovies()
	}, [])
	const filertedMovies = filterPosts(movies, searchQuery)

	return (
		<>
			<div className={styles.container}>
				<h1>Star Wars Movie</h1>
				<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
				<div>
					{filertedMovies
						.sort((a, b) => a.uid - b.uid)
						.map((movie) => (
							<MovieItem key={movie.uid} movie={movie} />
						))}
				</div>
			</div>
		</>
	)
}

export default MovieList
