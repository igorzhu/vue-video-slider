import Vue from 'vue';

import {videoList} from './json-data.js';

window.onload = function(){

    Vue.component('video-comp', {
        template: '<video v-on:ended="incrementVideoNum" autoplay muted v-bind:poster="videos[videoNum].poster" controls\n' +
        'v-bind:src="videos[videoNum].src" width="100%"\n' +
        '></video>',
        data: function () {
            return {
                videos: videoList,
                videoNum: 0
            }
        },
        methods: {
            incrementVideoNum: function () {
                this.videoNum++;
            }
        }
    });

    var videoWrapper = new Vue({
        el: '.video-container'
    });
};

