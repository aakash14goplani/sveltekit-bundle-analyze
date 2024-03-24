import { rootPageConfig } from '$lib/utils/root/helper';
import type { LayoutLoad } from './$types';

export const load = (() => {
	return {
		config: rootPageConfig('layout')
	};
}) satisfies LayoutLoad;
