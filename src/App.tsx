import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './page/SearchPage/SearchPage'
import BookPage from './page/BookPage/BookPage'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path={'/'} element={<SearchPage />} />
				<Route path={'/:id'} element={<BookPage />} />
			</Routes>
		</div>
	)
}

export default App
