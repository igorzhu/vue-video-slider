import Vue from 'vue';

import {videoList} from './json-data.js';

window.onload = function(){

    Vue.component('video-comp', {
        template: '<video v-on:ended="showNextVideo" autoplay muted v-bind:poster="videos[vNum].poster" controls\n' +
        'v-bind:src="videos[vNum].src" width="100%"\n' +
        '></video>',
        props: ['vNum', 'videos', 'ifPlayed', 'ifPaused'],
        methods: {
            showNextVideo: function(){
                this.$emit('increment');
            }
        }
    });

    var videoWrapper = new Vue({
        el: '.video-container',
        data: {
            items: videoList,
            videoNum: 0,
            isPlayed: true,
            isPaused: false
        },
        methods: {
            incrementVideoNum: function () {
                if (this.items[this.videoNum+1]){
                    this.videoNum++;
                } else {
                    this.videoNum = 0;
                }
                this.isPlayed = true;
                this.isPaused = false;
            },
            decrementVideoNum: function () {
                if (this.items[this.videoNum-1]){
                    this.videoNum--;
                } else {
                    this.videoNum = this.items.length - 1;
                }
                this.isPlayed = true;
                this.isPaused = false;
            },
            playPause : function () {
                if (this.isPlayed) {
                    document.getElementsByTagName('video')[0].pause();
                } else {
                    document.getElementsByTagName('video')[0].play();
                }
                this.isPlayed = !(this.isPlayed);
                this.isPaused = !(this.isPaused);

            }
    }
    });
};

