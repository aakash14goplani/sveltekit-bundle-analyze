declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: {
				user: {
					name: string;
					email: string;
				};
			} | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
