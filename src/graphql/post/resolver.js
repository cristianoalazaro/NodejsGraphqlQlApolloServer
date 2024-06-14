const post = () => {
    return {
        id: 1,
        title: 'A história dela',
    }
}

const posts = () => {
    return [
        {
            id: 1,
            title: 'A história dela',
        },
        {
            id: 2,
            title: 'Era uma vez',
        },
        {
            id: 3,
            title: 'A longa trajetória',
        },
        {
            id: 4,
            title: 'Nós dois',
        },
    ]
}

export const postResolvers = {
    Query: {
        post,
        posts,
    }
}