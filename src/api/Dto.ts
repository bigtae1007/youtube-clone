export interface IVideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: IThumbnails;
      medium: IThumbnails;
      high: IThumbnails;
      standard: IThumbnails;
      maxres: IThumbnails;
    };
    channelTitle: string;
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: "ko" | "en";
  };
}

interface IThumbnails {
  url: string;
  width: number;
  height: number;
}
