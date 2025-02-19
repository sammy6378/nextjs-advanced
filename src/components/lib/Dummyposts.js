// dummy data for posts
export const posts = [
    {
        id: 5367,
        title: "First Post",
        content: "This is the content of the first post.",
        author: "John Doe",
        createdAt: new Date("2022-01-01T12:00:00"),
        comments: [
            {
                id: 1,
                author: "Jane Smith",
                content: "Nice post!",
                createdAt: new Date("2022-01-02T14:30:00"),
            },
            {
                id: 2,
                author: "Alice Johnson",
                content: "I agree!",
                createdAt: new Date("2022-01-03T10:45:00"),
            },
        ],
    },

    {
        id: 3302,
        title: "Second Post",
        content: "This is the content of the second post.",
        author: "Jane Smith",
        createdAt: new Date("2022-01-02T15:00:00"),
        comments: [
            {
                id: 3,
                author: "Bob Brown",
                content: "I love it!",
                createdAt: new Date("2022-01-03T11:15:00"),
            },
        ],
    },

    {
        id: 2339,
        title: "Third Post",
        content: "This is the content of the third post.",
        author: "Alice Johnson",
        createdAt: new Date("2022-01-03T16:00:00"),
        comments: [],
    },

    {
        id: 771,
        title: "Fourth Post",
        content: "This is the content of the fourth post.",
        author: "Bob Brown",
        createdAt: new Date("2022-01-04T09:30:00"),
        comments: [
            {
                id: 4,
                author: "Jane Smith",
                content: "I agree with you.",
                createdAt: new Date("2022-01-05T12:45:00"),
            },
        ],
    },


    {
        id: 256,
        title: "Fifth Post",
        content: "This is the content of the fifth post.",
        author: "Alice Johnson",
        createdAt: new Date("2022-01-05T13:00:00"),
        comments: [
            {
                id: 5,
                author: "Bob Brown",
                content: "I'm glad to hear that.",
                createdAt: new Date("2022-01-06T14:15:00"),
            },
        ],
    }
]