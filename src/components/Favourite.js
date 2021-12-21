import React, { useRef } from 'react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import useLocalStorage from 'react-use-localstorage'
import { useAlert } from 'react-alert'
const Favourite = ({ id }) => {
	const alert = useAlert()
	const [storageItem, setStorageItem] = useLocalStorage(
		'favourites',
		JSON.stringify([])
	)

	const storagedArray = useRef(JSON.parse(storageItem))
	const isFavourited = storagedArray.current.includes(id)

	const handleToggleFavourite = () => {
		if (!isFavourited) {
			alert.show('Added to favourite')
			storagedArray.current.push(id)
			setStorageItem(JSON.stringify(storagedArray.current))
		} else {
			alert.show('Removed from favourite')
			const indexFavouritedId = storagedArray.current.indexOf(id)
			storagedArray.current.splice(indexFavouritedId, 1)
			setStorageItem(JSON.stringify(storagedArray.current))
		}
	}
	return (
		<span onClick={handleToggleFavourite}>
			{isFavourited ? (
				<IoIosHeart size={30} style={{ color: 'red' }} />
			) : (
				<IoIosHeartEmpty size={25} style={{ color: 'red', size: 100 }} />
			)}
		</span>
	)
}

export default Favourite
