import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

import React, { useRef, useEffect, useState } from "react";
import css from "./styles.module.scss";

const Video = (props) => {
  const [playToggler, setPlayToggler] = useState(faPlay);
  const [volumeIcon, setVolumeIcon] = useState(faVolumeUp);
  const [volumeValue, setVolumeValue] = useState(1);

  const videoRef = useRef();
  const volumeControlRef = useRef();
  const progressBar = useRef();
  const progressFill = useRef();
  const controller = useRef();

  const toggleVideo = () => {
    const method = videoRef.current.paused ? "play" : "pause";
    method === "play" ? setPlayToggler(faPause) : setPlayToggler(faPlay);
    videoRef.current[method]();
  };
  const changeVolumeValue = () => {
    videoRef.current.volume === 0
      ? setVolumeIcon(faVolumeMute)
      : setVolumeIcon(faVolumeUp);
    videoRef.current.volume = volumeControlRef.current.value;
  };
  const handleProgress = () => {
    const percent =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    progressFill.current.style.width = `${percent}%`;
  };
  const guilgeh = (e) => {
    const scrubTime =
      (e.offsetX / progressBar.current.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = scrubTime;
  };

  useEffect(() => {
    videoRef.current.addEventListener("click", toggleVideo);
    volumeControlRef.current.addEventListener("mousemove", changeVolumeValue);
    videoRef.current.addEventListener("timeupdate", handleProgress);
    progressBar.current.addEventListener("click", guilgeh);
    progressFill.current.addEventListener("click", guilgeh);
  }, []);

  return (
    <div className={css.Video}>
      <video ref={videoRef} data-fullscreen="false">
        <source src="https://www10.ff-01.com/token=uR9F1Bg4eU30rJ21M2rFpA/1610122369/66.181.0.0/148/7/cf/f8d699db88cb3ce6fbe862b4431d4cf7-480p.mp4" />
      </video>
      <div className={css.VideoController}>
        <div className={css.Progress}>
          <div ref={progressBar} className={css.ProgressBar}></div>
          <div ref={progressFill} className={css.ProgressFill}></div>
        </div>
        <div className={css.Buttons}>
          <button onClick={toggleVideo} className={css.ToggleBtn}>
            <FontAwesomeIcon icon={playToggler} color="#fff" />
          </button>

          <div ref={controller} className={css.VolumeController}>
            <FontAwesomeIcon icon={volumeIcon} color="#fff" />
            <input
              ref={volumeControlRef}
              type="range"
              name="volume"
              max="1"
              min="0"
              step="0.05"
              className={css.VolumeControl}
              defaultValue="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
