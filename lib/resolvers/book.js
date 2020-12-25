const resolvers = {
    Query: {
        books: () => {
            const books = [
                {
                    title: 'Harry Potter and the Chamber of Secrets',
                    author: 'J.K. Rowling',
                },
                {
                    title: 'Jurassic Park',
                    author: 'Michael Crichton',
                }
            ];
            return books;
        }
    }
}

module.exports = { resolvers };