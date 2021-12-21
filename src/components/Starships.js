import styles from '../styles/Layout.module.scss'
import ReactTooltip from 'react-tooltip'
const Starships = ({ starships }) => {
	return (
		<div className={styles.inline}>
			<strong>Starships: </strong>
			{starships.map((i) => (
				<span
					key={i.uid}
					data-tip={[
						' Model: ' + i.properties.model,
						' Crew: ' + i.properties.crew,
						' Passengers: ' + i.properties.passengers,
						' Manufacturer: ' + i.properties.manufacturer,
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

export default Starships
