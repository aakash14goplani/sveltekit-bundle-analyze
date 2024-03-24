import { aboutPageConfig } from '$lib/utils/about/helper';
import type { PageServerLoad } from './$types';

export const load = (() => {
	return {
		config: aboutPageConfig('layout')
	};
}) satisfies PageServerLoad;
