import Vue from 'vue';

import {newDataArr} from './json-data.js';

window.onload = function(){

    Vue.component('video-comp', {
        template: '<video v-on:ended="incrementVideoNum" autoplay v-bind:poster="videos[videoNum].poster" controls\n' +
        'v-bind:src="videos[videoNum].src" width="100%"\n' +
        '></video>',
        data: function () {
            return {
                videos: [
                    {
                        src: 'https://player.vimeo.com/external/215830687.hd.mp4?s=9dcef172a3aa2d6ce99dd0c2ad9d477b6da9a4a7&amp;profile_id=174',
                        poster: '/picts/video_clips/Italian_salad_bg.jpg',
                    },

                    {
                        src: 'https://player.vimeo.com/external/246400122.hd.mp4?s=9ae3e6e330c669ebe062e475c60a1af50fe1161a&amp;profile_id=175',
                        poster: '/picts/video_clips/fon-2.jpg',
                    },

                    {
                        src: 'https://player.vimeo.com/external/246401677.hd.mp4?s=f02d68ec46d91dd5bc556528014bf55df5e99868&amp;profile_id=175',
                        poster: '/picts/video_clips/fon-1.jpg',
                    },

                    {
                        src: 'https://player.vimeo.com/external/246401244.hd.mp4?s=b5919e37b8872740d975ba1563a1d7df8ac02354&amp;profile_id=175',
                        poster: '/picts/video_clips/Italian_salad_bg.jpg',
                    },

                    {
                        src: 'https://player.vimeo.com/external/219491137.hd.mp4?s=b5ec45755d9706deb330b68881bdc97366a26c48&amp;profile_id=119',
                        poster: '/picts/video_clips/Italian_salad_bg.jpg',
                    }
                ],
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

