const WebSDK = require('../webSDK');

describe('web SDK', () => {
    test('should return a list of posts', async () => {
        const url = 'https://jsonplaceholder.typicode.com';
        const webSDK = new WebSDK(url);

        const response = await webSDK.getPosts();

        expect(response.length).toBe(100);
    });

    test('should throw an error', () => {
        const url = 'bad-url';
        const webSDK = new WebSDK(url);
        expect(webSDK.getPosts()).rejects.toThrow('Failed to parse URL from bad-url/posts');
    });
});
