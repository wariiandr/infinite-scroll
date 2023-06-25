<template>
    <div class="w-25 mx-auto mt-4">
        <card-list-item 
            v-for="card in cards"
            :key="card.id.value"
            :card="card"
        />

        <div ref="observerElem"></div>
    </div>
</template>
  
<script setup>
import CardListItem from './CardListItem.vue';

import { ref, onMounted } from 'vue';
import { fetchCards } from '../api/api';
import { useInfiniteScroll } from '../hooks/infiniteScroll';

/**
 * Array of cards
 * @type {Array}
 */
const cards = ref([]);

/**
 * Current page number, default = 1
 * @type {number}
 */
const page = ref(1);
/**
 * Number of card results, default = 15, not reactive
 * @type {number}
 */
const results = 15;

/**
 * Get a paginated object with cards from the fetchCards method 
 * and connect them to the current array of cards
 */
async function getCards() {
    const paginatedCards = await fetchCards(page.value, results);

    cards.value = [ ...cards.value, ...paginatedCards.results ];
} 

/**
 * Gets the observer element and the observer creation function from the useInfiniteScroll hook
 */
const { observerElem, setObserver } = useInfiniteScroll(page, getCards);

/**
 * When mounting the component, we get an array of cards and create an observer
 */
onMounted(async () => {
    await getCards();

    setObserver();
})
</script>