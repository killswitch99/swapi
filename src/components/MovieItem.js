import Favourite from './Favourite'
import styles from '../styles/Layout.module.scss'
import { Link } from 'react-router-dom'
const MovieItem = ({ movie }) => {
	return (
		<>
			<div className={styles.item}>
				<Link to={`/movie/${movie.uid}`} style={{ textDecoration: 'none' }}>
					<span className={styles.card}>{movie.properties.title}</span>
				</Link>
				<span className={styles.icon}>
					<Favourite id={movie.uid} />
				</span>
			</div>
		</>
	)
}

export default MovieItem
