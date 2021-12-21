import MovieList from './components/MovieList.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movie from './components/Movie.js'
export default function Home() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<MovieList />}></Route>
				<Route exact path="/movie/:id" element={<Movie />}></Route>
			</Routes>
		</Router>
	)
}
