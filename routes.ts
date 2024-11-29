
/**
 * Array of routes that accessible publicly
 * Does not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    '/',
]

/**
 * Array of routes that are used for authentication
 * These will redirect logged in to /settings
 * @type {string[]}
 */
export const authRoutes = [
    '/auth/login',
    '/auth/register',
    '/auth/error',
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * The default redirect path after logged in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings'