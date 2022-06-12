export interface Post {
    createAt: string
    _id: string
    title: string
    author: {
        name: string
        image: {
            asset: {
                _ref: string
            }
        }
    }
    description?: string
    mainImage: {
        asset: {
            _ref: string
        }
    }
    slug: {
        current: string
    }
    body?: [object]
}
