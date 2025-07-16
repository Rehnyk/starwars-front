
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function sendMessage({ name, email, message }) {
    console.log("Sending contact form:", { name, email, message });
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        if (!response.ok) {
            throw new Error('Failed to send contact form');
        }
        return await response.json();

    } catch (error) {
        console.error('Error sending contact form:', error);
        throw error;
    }
}
