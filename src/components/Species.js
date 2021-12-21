import styles from '../styles/Layout.module.scss'
import ReactTooltip from 'react-tooltip'
const Species = ({ species }) => {
	return (
		<div className={styles.inline}>
			<strong>Species: </strong>
			{species.map((i) => (
				<span
					key={i.uid}
					data-tip={[
						' Classification: ' + i.properties.classification,
						' Average Height: ' + i.properties.average_height,
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

export default Species
