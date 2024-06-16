
const user = async (_, { id }, { axios }) => {
    const user = await axios.get(`http://localhost:3000/users/${id}`);
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