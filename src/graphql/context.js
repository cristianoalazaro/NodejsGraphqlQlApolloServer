import fetch from "node-fetch"

export const context = () => {
    return {
        getusers: (path = '/') => fetch('http://localhost:3000/users' +path)
    }
}