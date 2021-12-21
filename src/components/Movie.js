import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../styles/Layout.module.scss'
import Characters from './Characters'
import Planets from './Planets'
import Starships from './Starships'
import Vehicles from './Vehicles'
import Species from './Species'

const Movie = () => {
	const { id } = useParams()
	const [starships, setStarships] = useState([])
	const [vehicles, setVehicles] = useState([])
	const [species, setSpecies] = useState([])
	const [planets, setPlanets] = useState([])
	const [opening_crawl, setopening_crawl] = useState([])
	const [director, setdirector] = useState([])
	const [producer, setproducer] = useState([])
	const [release_date, setrelease_date] = useState([])
	const [title, settitle] = useState([])
	const [character, setCharacter] = useState([]) //charnames
	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		return await axios
			.get(`https://www.swapi.tech/api/films/${id}`)
			.then((res) => res.data)
			.then((data) => {
				settitle(data.result.properties.title)
				setopening_crawl(data.result.properties.opening_crawl)
				setdirector(data.result.properties.director)
				setproducer(data.result.properties.producer)
				setrelease_date(data.result.properties.release_date)

				data.result.properties.characters.map(
					async (chars) =>
						await axios
							.get(chars)
							.then((res) => res.data)
							.then((data) =>
								setCharacter((prevState) => [...prevState, data.result])
							)
				)
				data.result.properties.planets.map(
					async (chars) =>
						await axios
							.get(chars)
							.then((res) => res.data)
							.then((data) =>
								setPlanets((prevState) => [...prevState, data.result])
							)
				)
				data.result.properties.starships.map(
					async (chars) =>
						await axios
							.get(chars)
							.then((res) => res.data)
							.then((data) =>
								setStarships((prevState) => [...prevState, data.result])
							)
				)
				data.result.properties.vehicles.map(
					async (chars) =>
						await axios
							.get(chars)
							.then((res) => res.data)
							.then((data) =>
								setVehicles((prevState) => [...prevState, data.result])
							)
				)
				data.result.properties.species.map(
					async (chars) =>
						await axios
							.get(chars)
							.then((res) => res.data)
							.then((data) =>
								setSpecies((prevState) => [...prevState, data.result])
							)
				)
			})
			.catch((e) => console.log(e))
	}
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
			<Characters character={character} />
			<Planets planets={planets} />
			<Starships starships={starships} />
			<Vehicles vehicles={vehicles} />
			<Species species={species} />
		</div>
	)
}
export default Movie
