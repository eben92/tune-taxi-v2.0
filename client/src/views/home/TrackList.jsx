import "./tracklist.css";

const TrackList = ({ songs }) => {
  return (
    <div className='trackList-container'>
      <div className='trackList'>
        <img
          src={songs.albumUrl}
          className='songListImage bg-red-600'
          alt='song album'
        />
        <div className='songList bg-white'>
          {songs.artist} : {songs.title}
        </div>
      </div>
    </div>
  );
};

export default TrackList;
