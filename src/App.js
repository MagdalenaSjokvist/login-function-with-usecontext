import React, { useContext } from "react"
import { UserContext } from "./contexts/UserContextProvider"

function App() {
	const {
		isLoggedIn,
		setIsLoggedIn,
		userData,
		setUserData,
		loginUser,
		logoutUser,
	} = useContext(UserContext)

	function renderLoggedIn() {
		return (
			<div>
				Welcome {userData.username}
				<button onClick={logoutUser}>Log out</button>
			</div>
		)
	}
	function renderLoggedOut() {
		return <button onClick={loginUser}>Please log in</button>
	}

	return <div>{isLoggedIn ? renderLoggedIn() : renderLoggedOut()}</div>
}

export default App
