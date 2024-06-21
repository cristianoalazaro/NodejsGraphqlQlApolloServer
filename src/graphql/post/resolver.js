const post = async(_, { id }, { getPosts }) => {
    const post = await getPosts('/' + id);
    return await post.json();
}

const posts = async(_, __, { getPosts }) => {
    const posts = await getPosts();
    return await posts.json();
}

export const postResolvers = {
    Query: {
        post,
        posts,
    },
    Post: {
        unixTimestamp: () => Math.random()
    }
}