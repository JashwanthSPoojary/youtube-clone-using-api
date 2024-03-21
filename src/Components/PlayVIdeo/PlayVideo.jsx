import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setapiData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const fetchData = async () => {
    const fetchVideoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(fetchVideoDetails_url)
      .then((res) => res.json())
      .then((data) => setapiData(data.items[0]));
  };
  const fetchOtherData = async () => {
    const fetchChanelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(fetchChanelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchOtherData();
  }, [apiData]);
  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3 className="titles">{apiData ? apiData.snippet.title : "TItle here"}</h3>
      <div className="play-video-info">
        <p >
          {apiData ? value_converter(apiData.statistics.viewCount) : "16k"}{" "}
          &bull;{" "}
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "2 days ago"}
        </p>
        <div className="likes">
          <span>
            <img src={like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : "150"}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : jack}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "TItle here"}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "2M"}
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-desc">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : `<p>channel make learnings easy</p>
        <p>Subscribe GreatStack to watch More Tutorials on Web Development</p>
        `}
        </p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : "150"}
          comments
        </h4>
       
      </div>
    </div>
  );
};

export default PlayVideo;
