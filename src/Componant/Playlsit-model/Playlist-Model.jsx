import {usePlaylist} from "../../Context/Features-page/Playlist-context";

const PlaylistModel=({data})=>{
    const { createPlaylist, AddPlaylistVideo, playlist,showModel, setShowModel ,modelInput, setModelInput} = usePlaylist();

    const clickHandler = () => {
        createPlaylist({modelInput})  
         setModelInput("");
    
      };

    return (
        <div>
          <div className="model-container padding-22px">
          <section className="input-createBtn-section flex gap-2r">
            <input
              type="text"
              onChange={(e) => setModelInput(e.target.value)}
              value={modelInput}
              placeholder="create playlist"
            ></input>
            <i  onClick={()=>setShowModel(!showModel)} className="fa fa-times cross-icon" aria-hidden="true"></i>
            <button onClick={clickHandler} className="create-btn padding-4px">create</button>
            </section>
            {playlist.map((ele) => {
              return (
                <div>
                  <lable>
                    <input
                      onClick={() => {
                        return (
                          AddPlaylistVideo(ele._id,data),
                          setShowModel(!showModel)
                        )
                      }}
                      type="checkbox"
                    />
                    {ele.modelInput}
                  </lable>
                </div>
              );
            })}
          </div>
        </div>
    )
}

export default PlaylistModel;