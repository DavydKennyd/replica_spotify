const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const cover = document.getElementById('cover');
const song = document.getElementById('audio');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const IamDreaming = {
    songName: 'I am Dreaming',
    artist: 'Metro Boomin',
    file: 'i_am_dreaming'
};
const embalo = {
    songName: 'Embalo',
    artist: 'Ryu, The Runner',
    file: 'embalo'
};
const lagrimasNoCelular = {
    songName: 'Lagrimas no Celular',
    artist: 'Link do Zap',
    file: 'lagrima_no_ceular'
};
let isPlaying = false;

const playList = [IamDreaming, embalo, lagrimasNoCelular];
let index = 0;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
}

function initializeSong(){
    cover.src = `img/${playList[index].file}.jpg`;
    song.src = `songs/${playList[index].file}.mp3`;
    songName.innerText = playList[index].songName;
    bandName.innerText = playList[index].artist;
}

function previousSong(){
    if(index === 0){
        index = playList.length - 1;
    } else {
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong(){
    if(index === playList.length - 1){
        index = 0;
    } else {
        index += 1;
    }
    initializeSong();
    playSong();
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
