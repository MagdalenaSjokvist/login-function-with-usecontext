import React, { createContext, useState } from "react"

export const UserContext = createContext({})

export default function UserContextProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userData, setUserData] = useState(null)

	function loginUser() {
		setIsLoggedIn(true)
		setUserData({ username: "johndoe" })
	}
	function logoutUser() {
		setIsLoggedIn(false)
		setUserData(null)
	}
	return (
		<UserContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				userData,
				setUserData,
				loginUser,
				logoutUser,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
