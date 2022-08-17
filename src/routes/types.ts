/** A publicly-exposable application session. */
export interface PublicSessionData {
	/** Authentication details. */
	readonly auth: PublicAuthData | null;
}
/** Authenticated user information. */
export interface UserInfo {
	/**
	 * The unique identifier for this user. Usually some
	 * combination of a tenant ID and a user ID.
	 */
	readonly homeAccountId: string;

	/**
	 * The username this user would use to sign in. Should
	 * not be used as a unique identifier.
	 */
	readonly username: string | null;

	/**
	 * The user's full name.
	 */
	readonly name: string | null;
}

/** An array containing all valid roles for this application. */
export const authRoles = [
	'Site.View',
	'Site.Operations/analytics',
	'Site.Finance/analytics',
	'Site.Amenities/administer',
	'Site.Administer',
	'Site.Inventory/administer',
	'Site.Marketing/analytics',
	'Site.QAR/administer'
] as const;

/** A valid role for this application. */
export type AuthRole = typeof authRoles[number];

// eslint-disable-next-line
export interface PublicAuthData {
	/** Whether the user is currently authenticated. */
	readonly authenticated: boolean;

	/** The user's information. */
	readonly user: UserInfo;

	/** The application roles the user holds. */
	readonly roles: Array<AuthRole>;
}
