import Vue from 'vue';
import images from './images.json';
import informations from './information.json';
import reelDatas from './reelData.json';

export const Store = new Vue({
    data() {
        return {
            images,
            informations,
            reelDatas
        };
    },
});