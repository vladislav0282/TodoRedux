import React from "react"
import { useDispatch } from "react-redux"
import { clearTodosAC } from "../../redux/actionCreators/todosAC"


export const Footer = () => {
	console.log('Render Footer')

	const dispatch = useDispatch()


	const clearTodosHandler = () => {
		dispatch(clearTodosAC())
	}


	return (
		<footer className="d-flex justify-content-center">
			<button
					onClick={clearTodosHandler}
          type="button"
          className="btn btn-danger"
        >
          Clear
        </button>
		</footer>
	)
}


