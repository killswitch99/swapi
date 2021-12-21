import styles from '../styles/Layout.module.scss'
import ReactTooltip from 'react-tooltip'
const Characters = ({ character }) => {
	return (
		<div className={styles.inline}>
			<strong>Cast: </strong>
			{character.map((i) => (
				<span
					key={i.uid}
					data-tip={[
						' Gender: ' + i.properties.gender,
						' Height: ' + i.properties.height,
						' Skin Color: ' + i.properties.skin_color,
						' Eye Color: ' + i.properties.eye_color,
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

export default Characters
