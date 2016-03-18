
function Login(){
window.location.href="account_signin.html";
}

var playlists = JSON.parse(playlistsJSON);

function Pop_Up(){
document.getElementById('play').style.transition= "all 0.5s";
document.getElementById('play').style.visibility= "visible";
document.getElementById('play').style.height = "500px";
}
