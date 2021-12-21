import styles from '../styles/Layout.module.scss'
import ReactTooltip from 'react-tooltip'
const Vehicles = ({ vehicles }) => {
	return (
		<div className={styles.inline}>
			<strong>Vehicles: </strong>
			{vehicles.map((i) => (
				<span
					key={i.uid}
					data-tip={[
						' Model: ' + i.properties.model,
						' Passengers: ' + i.properties.passengers,
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

export default Vehicles
