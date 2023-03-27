//player.js

const { Amplitude } = require("amplitudejs");

//todo: player configuration
Amplitude.init({
    songs: [{
        name: 'Liar Mask',
        artist: 'Mayama Rika',
        album: 'HBSongs',
        url: '.music/Liar_Mask-Rika.mp3',
        convert_art_url: './music/icon.jpg'
    },
    {
        name: 'Dawn',
        artist: 'Janji',
        album: 'HBSongs',
        url: '.music/Dawn-Janji.mp3',
        convert_art_url: './music/icon.jpg'
    }
    ]
})

