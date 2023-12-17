let audioPlayer = new Audio();
let seekBar = document.getElementById('seek-bar');
let songNameElement = document.getElementById('song-name');
let currentSongIndex = 0;
let songs = [
  "songs/Sooreede Song (Pagalworld123.com).mp3",
  "songs/Animal Evarevaro (Pagalworld123.com).mp3",
  "songs/Ruaan - Tiger 3 320 Kbps.mp3"
]; 

function playAudio() {
  let nextSong = songs[currentSongIndex];
  audioPlayer.src = nextSong;
  audioPlayer.play();

  songNameElement.textContent = nextSong.split('/').pop(); 

  audioPlayer.addEventListener('timeupdate', function() {
    seekBar.value = audioPlayer.currentTime;
  });

  seekBar.addEventListener('change', function() {
    audioPlayer.currentTime = seekBar.value;
  });
}

function pauseAudio() {
  audioPlayer.pause();
}

function playNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playAudio();
}

function playPrevious() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playAudio();
}
