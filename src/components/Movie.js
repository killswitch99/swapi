import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../styles/Layout.module.scss'
import ReactTooltip from 'react-tooltip'
const Movie = () => {
	const { id } = useParams()
	const [urls, setCharUrls] = useState([]) //urls
	const [opening_crawl, setopening_crawl] = useState([])
	const [director, setdirector] = useState([])
	const [producer, setproducer] = useState([])
	const [release_date, setrelease_date] = useState([])
	const [title, settitle] = useState([])
	const [character, setCharacter] = useState([]) //charnames
	useEffect(() => {
		fetchMovie()
		//fetchCharacters()
	}, [])
	async function fetchMovie() {
		return await axios
			.get(`https://www.swapi.tech/api/films/${id}`)
			.then((res) => res.data)
			.then((data) => {
				settitle(data.result.properties.title)
				setopening_crawl(data.result.properties.opening_crawl)
				setdirector(data.result.properties.director)
				setproducer(data.result.properties.producer)
				setrelease_date(data.result.properties.release_date)
				setCharUrls(...urls, data.result.properties.characters)
				data.result.properties.characters.map(
					async (chars) =>
						await axios
							.get(chars)
							.then((res) => res.data)
							.then((data) =>
								setCharacter((prevState) => [...prevState, data.result])
							)
				)
			})
			.catch((e) => console.log(e))
	}
	// async function fetchCharacters() {
	// 	return await Promise.all(
	// 		urls.map(async (url) =>
	// 			fetch(url)
	// 				.then((res) => res.data)
	// 				.then((data) => {
	// 					setCharacter(...character, data.result.properties.name)
	// 				})
	// 		)
	// 	)
	// }
	return (
		<div className={styles.container}>
			<Link to="/">
				<button className={styles.button}>Go Back</button>
			</Link>
			<h1 className={styles.title}>{title}</h1>
			<div>
				<p>
					<strong>Intro : </strong>
					{opening_crawl}
				</p>
				<p>
					<strong>Director: </strong>
					{director}
				</p>
				<p>
					<strong>Producers: </strong>
					{producer}
				</p>
				<p>
					<strong>Release Date: </strong>
					{release_date}
				</p>
			</div>
			<div className={styles.inline}>
				<strong>Cast: </strong>
				{character.map((i) => (
					<span
						key={i.uid}
						data-tip={[
							'Gender' + i.properties.gender,
							'Height' + i.properties.height,
							'Skin Color' + i.properties.skin_color,
							'Eye Color' + i.properties.eye_color,
						]}
						className={styles.name}
					>
						{i.properties.name}
						<ReactTooltip />
					</span>
				))}
			</div>
		</div>
	)
}
export default Movie
