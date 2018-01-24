class Jukebox{
	constructor(audio){
		this.songs = ['dlx.mp3', 'sergey.mp3', 'zmajor.mp3'];
		this.song = audio;
		this.currentSongIndex = 0;
	}
	playSong(){
		this.song.play();
		
	}
	pauseSong(){
		this.song.pause();
		
	}
	stopSong(){
		this.song.pause();
		this.song.currentTime = 0;
	}
	addSong(songs){
		this.songs.push(songs);
	}
	skipSong(){
		this.currentSongIndex++;
		this.song.setAttribute('src', this.songs[this.currentSongIndex]);
	}
}

var audio = document.getElementById('audio');
var jukebox = new Jukebox(audio);

var stop = document.getElementById('stop');
stop.addEventListener('click', function(){
	jukebox.stopSong(); 
});


var skip = document.getElementById('skip');
skip.addEventListener('click', function(){
	jukebox.skipSong();
});

var play = document.getElementById('play');
play.addEventListener('click', function(){
	jukebox.playSong();		
});

var pause = document.getElementById('pause');
pause.addEventListener('click', function(){
	jukebox.pauseSong();
});

jukebox.playSong(); //autoplay song on page load.

