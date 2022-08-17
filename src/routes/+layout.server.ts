// import { cleanForClient } from '$lib/session';
import type { LayoutServerLoad } from './$types';
import type { PublicSessionData } from './types';

export const load: LayoutServerLoad = () => {
	const session: PublicSessionData = {} as PublicSessionData;
	return {
		session
	};
};
