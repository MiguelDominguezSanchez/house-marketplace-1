import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {
	const [user, setUser] = useState(null)

	const auth = getAuth()
	useEffect(() => {
		console.log(auth.currentUser)
	}, [])

	return user ? <h1>{user.displayName}</h1> : 'Not Logged In'
}

export default Profile
