import { art_routes } from "./art_data";

export function load() {
	return {
		galleries: art_routes.map((art_routes) => ({
			title: art_routes.name,
			route: art_routes.route
		}))
	};
}
