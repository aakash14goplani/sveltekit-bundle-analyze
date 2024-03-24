import { rootPageConfig } from '$lib/utils/root/helper';
import type { PageLoad } from './$types';

export const load = (() => {
	return {
		config: rootPageConfig('page')
	};
}) satisfies PageLoad;
