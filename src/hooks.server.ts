import type { Handle, HandleServerError } from '@sveltejs/kit';
import userSession from '$lib/server/session-management';

export const handleError: HandleServerError = ({ error }) => {
	const message = 'Error caught in [server-hooks]: ' + (error as any)?.message;
	console.error(message);
	return { message };
};

export const handle = (async ({ event, resolve }) => {
	event.locals.session = userSession;
	return await resolve(event);
}) satisfies Handle;
