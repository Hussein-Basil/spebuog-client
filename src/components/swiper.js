import React from 'react'
import { Flex } from '@chakra-ui/react'

import './swiper.styles.css'

export const SwiperContainer = ({ children, ...props }) => {
    return  (
        <div id="card-container">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
        </div>
    )
}


export default function createSwiper() {
    let currentCard = 0;
    let startX = 0;
    let moveX = 0;
    let deltaX = 0;

    const cardContainer = document.getElementById("card-container");

    cardContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    });

    cardContainer.addEventListener("touchmove", (e) => {
    moveX = e.touches[0].clientX;
    deltaX = moveX - startX;
    });

    cardContainer.addEventListener("touchend", (e) => {
    if (currentCard === 0 && deltaX > 0) {
        return;
    } else if (currentCard === document.querySelectorAll('.card').length - 1 && deltaX < 0) {
        return;
    } else if (deltaX > 0) {
        swipeCard("right");
    } else {
        swipeCard("left");
    }
    });

    function swipeCard(direction) {
    const cards = document.querySelectorAll('.card');
    cards[currentCard].classList.add('hidden');

    if (direction === 'right') {
        currentCard = currentCard === 0 ? cards.length - 1 : currentCard - 1;
    } else {
        currentCard = currentCard === cards.length - 1 ? 0 : currentCard + 1;
    }

    cards[currentCard].classList.remove('hidden');
}

}


