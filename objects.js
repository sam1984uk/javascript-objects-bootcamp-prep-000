var playlist = { artist:"track" };

function updatePlaylist(playlist, artist, track){
  playlist[artist] = track;
  return playlist;
} 

function removeFromPlaylist(playlist, artist){
  playlist[artist];
  return playlist
}