export function rootPageConfig(type: 'layout' | 'page') {
	return {
		showBreadcrumb: type === 'page'
	};
}
