// import { cleanForClient } from '$lib/session';
import type { LayoutServerLoad } from './$types';
import type { PublicSessionData } from './types';

export const load: LayoutServerLoad = () => {
	// this is lazy, but the error exists even when you build out a full object
	// instead of typecasting
	const session: PublicSessionData = {} as PublicSessionData;
	return {
		session
	};
};
