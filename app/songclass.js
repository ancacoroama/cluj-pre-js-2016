var JSONparse=JSON.parse(playlistsJSON);//parsare piese si in functia Pop_Up


function Song(path){
  console.log("2:"+path);
  this.image=path.image;
  this.title=path.songTitle;
  this.artist=path.songAuthor;
  this.length=path.songLength;
  this.listened=path.songListened;
  }

Song.prototype.getSongTitle= function(){

  return this.songTitle ;
}

Song.prototype.getSongAuthor= function(){

  return this.songAuthor;
}

Song.prototype.getSongLength= function(){

  return this.songLength;
}

Song.prototype.getSongListened= function(){

  return this.songListened;
}

Song.prototype.getSongImage= function(){

  return this.image;
}
