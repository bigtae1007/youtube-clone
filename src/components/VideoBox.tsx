import React from "react";
import { IVideoItem } from "../api/Dto";

interface IVideoBox {
  item: IVideoItem;
  width: number;
  height: number;
}

const VideoBox = ({ item, width, height }: IVideoBox) => {
  return (
    <div>
      <iframe
        id="ytplayer"
        width={`${width}`}
        height={`${height}`}
        src={`"https://www.youtube.com/embed/${item.id}?autoplay=1&color=white"`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBox;
