
const user = async (_, __, { axios }) => {
    const user = await axios.get('http://localhost:3000/users/602');
    return await user.data
}

const users = async (_, __, { axios }) => {
    const users = await axios.get('http://localhost:3000/users');
    return await users.data
}

export const userResolvers = {
    Query: {
        user,
        users,
    }
}