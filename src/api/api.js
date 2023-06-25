/**
 * Api module
 * @module api
 */

/**
 * Base API url
 * @type {string}
 */
export const baseUrl = 'https://randomuser.me/api/';

/**
 * Get paginated cards from API
 * @param {number} page - current page number
 * @param {number} results - number of posts
 * @returns {Object} - object with property 'info' - information about pagination and with property 'results' - array with cards
 */
export async function fetchCards(page, results) {
    const res = await fetch(`${baseUrl}?page=${page}&results=${results}`);
    return await res.json();
} 