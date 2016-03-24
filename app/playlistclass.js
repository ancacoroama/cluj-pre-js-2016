
function Playlist(path){
  this.name="";
  this.songList=[];
}

Playlist.prototype.addSong=function(s){
  this.songList.push(s)
}
