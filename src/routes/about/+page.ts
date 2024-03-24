import { aboutPageConfig } from '$lib/utils/about/helper';
import type { PageLoad } from './$types';

export const load = (() => {
	return {
		config: aboutPageConfig('page')
	};
}) satisfies PageLoad;
