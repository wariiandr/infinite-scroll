/**
 * Infinite scroll module
 * @module infiniteScroll
*/

import { ref, onUnmounted } from 'vue'

/**
 * Composable function that creates an intersection observer for an infinite scroll
 * @param {number} page current page number
 * @param {Function} getCards callback function that get an array of cards and adds them to the reactive card array in component
 * @returns {Object} with observerElem - ref, setObserver - function that creates an observer
 */
export function useInfiniteScroll(page, getCards) {
    /**
     * Intersection observer object
     * @type {IntersectionObserver}
     */
    const intersectionObserver = ref(null);
    /**
     * The div tag in the template that will be tracked by the Intersection Observer
     * @type {Object}
     */
    const observerElem = ref(null)

    /**
     * Function that creates an interaction observer and if it intersects, it executes a callback and increases the page
     */
    function setObserver() {
        intersectionObserver.value = new IntersectionObserver(async ([ entry ]) => {
            if (entry.isIntersecting) {
                page.value++;
    
                await getCards();
            }
        });
    
        intersectionObserver.value.observe(observerElem.value);
    }
    
    /**
     * Function that removes an observation
     */
    onUnmounted(() => {
        intersectionObserver.value.unobserve(observerElem.value);
    })
    
    return { observerElem, setObserver }
}