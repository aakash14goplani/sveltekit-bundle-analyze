import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = ({ error }) => {
	const message = 'Error caught in [client-hooks]: ' + (error as any)?.message;
	console.error(message);
	return { message };
};