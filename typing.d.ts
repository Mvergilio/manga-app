export interface Post {
    createAt: string
    _id: string
    title: string
    author: {
        name: string
        image: string
    }
    description: string
    mainImage: {
        assets: {
            url: string
        }
    }
    slug: {
        current: string
    }
    body: [object]
}
