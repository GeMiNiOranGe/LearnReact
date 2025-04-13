import theme from '@/styles/theme';

export type ReducerAction<Type, Payload> = {
  type: Type;
  payload: Payload;
};

export type ReducerActionWithoutPayload<Type> = {
  type: Type;
};

export type YoutubeVideo = {
  videoId: string;
  title: string;
  authorImage: string;
  authorName: string;
};

export type AppTheme = typeof theme;
