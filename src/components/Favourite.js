import React, { useRef } from 'react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import useLocalStorage from 'react-use-localstorage'
const Favourite = ({ id }) => {
	const [storageItem, setStorageItem] = useLocalStorage(
		'favourites',
		JSON.stringify([])
	)

	const storagedArray = useRef(JSON.parse(storageItem))
	const isFavourited = storagedArray.current.includes(id)

	const handleToggleFavourite = () => {
		if (!isFavourited) {
			storagedArray.current.push(id)
			setStorageItem(JSON.stringify(storagedArray.current))
		} else {
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
