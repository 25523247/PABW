const URL = 'https://jsonplaceholder.typicode.com/posts';

    export async function load() {
    try {
        const response = await fetch(URL);
        console.log('status', response.status, 'ok', response.ok);

        if (!response.ok) {
        throw new Error('status ' + response.status);
        }

        return await response.json();
    } catch (error) {
        console.error('failed to load', error.message);
        throw error;
    }
  }