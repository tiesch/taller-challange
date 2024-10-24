class WebSDK {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async getPosts() {
        try {
            const response = await fetch(`${this.apiUrl}/posts`);
            if (!response.ok) {
                throw new Error('Error fetching all post');
            }

            return response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = WebSDK;
