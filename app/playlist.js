
  function Login(){
      window.location.href="account_signin.html";
  }

  var playlists = JSON.parse(playlistsJSON);

  // for (var i = 0; i < playlist[0].length; i++) {
  //   playlist[0].song[i].song
  // }

  function Pop_Up(){
      document.getElementById('play').style.transition= "all 0.5s";
      document.getElementById('play').style.visibility= "visible";
      document.getElementById('play').style.height = "500px";

  //console.log(JSONparse); //parsare si afisare pe consola
  //console.log(usersJSON);

      var currentPlaylist= new Playlist(); //creare playlistul meu curent

      console.log(currentPlaylist);
      var iDiv= document.createElement('div');
      iDiv.id='play1';
      iDiv.style.width ="200px";
      iDiv.style.height ="200px";
      iDiv.style.backgroundColor = "red";
      document.getElementById('play').appendChild(iDiv);


//create header
console.log("1111"+playlists[0].songs);
  for (var i = 0; i < playlists[0].songs.length; i++)
   var song = new Song(playlists[0].songs[i]);
   console.log("1:"+playlists[0].songs);
   currentPlaylist.addSong(song);


//  console.log(currentPlaylist);?
console.log(currentPlaylist);
    for( var i=0; i< currentPlaylist.songList.length; i++){

        var contentDiv = document.createElement('div');
        contentDiv.id = 'div_song';
        contentDiv.style.width= "200px";
        contentDiv.style.height="100px";
        contentDiv.style.backgroundColor= "yellow";
        iDiv.appendChild(contentDiv);

        var song = new Song(currentPlaylist.songList[i]);
        console.log(song);
        var title = document.createElement('span');
        title.innerText= song.getSongTitle();
        contentDiv.appendChild(title);



    }



  }
