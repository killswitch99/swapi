import styles from '../styles/Layout.module.scss'
import ReactTooltip from 'react-tooltip'
const Planets = ({ planets }) => {
	return (
		<div className={styles.inline}>
			<strong>Planets: </strong>
			{planets.map((i) => (
				<span
					key={i.uid}
					data-tip={[
						' Diameter: ' + i.properties.diameter,
						' Population: ' + i.properties.population,
						' Climate: ' + i.properties.climate,
						' Terrain: ' + i.properties.terrain,
					]}
					className={styles.name}
				>
					{i.properties.name}
					<ReactTooltip />
				</span>
			))}
		</div>
	)
}

export default Planets
