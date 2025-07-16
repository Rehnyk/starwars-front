/* const baseUrl = 'https://non-existent-server.com';

export async function getComments() {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}

export async function postComment(newComment) {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        });

        if (!response.ok) {
            throw new Error('Failed to post comment');
        }
        return await response.json();

    } catch (error) {
        console.error('Error posting comment:', error);
        return null;
    }
}
 */