type boardData = {
  id: string;
  fullName: string;
  title: string;
  content: string;
  imgIndex: number | null;
  profilePicIndex: number;
  liked: boolean;
};
type tabs = 'board' | 'events' | 'articles' | 'video' | 'podcasts';

type eventsData = {
  id: string;
  date: string;
  title: string;
  participants: number;
  imgIndex: number;
  type: string;
  joined: boolean;
};
