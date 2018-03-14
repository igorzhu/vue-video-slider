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
                //console.log(document.getElementsByTagName('video')[0]);
                console.log(this.$el);
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
            },
            decrementVideoNum: function () {
                if (this.items[this.videoNum-1]){
                    this.videoNum--;
                } else {
                    this.videoNum = this.items.length - 1;
                }
            },
            playPause : function () {
                this.isPlayed = !(this.isPlayed);
                this.isPaused = !(this.isPaused);
                document.getElementsByTagName('video')[0].pause();
            }
    }
    });
};

