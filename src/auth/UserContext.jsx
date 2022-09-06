import { createContext, useContext } from 'react'

const UserContext = createContext({})

export const useUser = () => {
    return useContext(UserContext)
}

export default UserContext