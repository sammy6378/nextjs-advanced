export const fetchPost = async () => {
    try {
        const url = `https://dummyjson.com/posts`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch post: ${response.statusText}`);
        }

        const data = await response.json();
        return data; // Return the single post object
    } catch (error) {
        console.error('Error fetching post:', error);
        return null; // Return null on error
    }
};
