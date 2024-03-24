import type { PageServerLoad } from './$types';

export const load = (() => {
	return {
		config: new Date().getTime()
	};
}) satisfies PageServerLoad;
