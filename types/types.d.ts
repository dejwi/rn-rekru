type RootStackParamList = {
  Feed: undefined;
  Article: {
    id: string;
  };
  NewPost: undefined;
};

interface boardData {
  id: string;
  fullName: string;
  title: string;
  content: string;
  imgIndex: number | null;
  profilePicIndex: number;
  liked: boolean;
}
type tabs = 'board' | 'events' | 'articles' | 'video' | 'podcasts';

interface eventsData {
  id: string;
  date: string;
  title: string;
  participants: number;
  imgIndex: number;
  type: string;
  joined: boolean;
}

interface articleData {
  id: string;
  title: string;
  imgIndex: number;
  liked: boolean;
  content: string;
  readTime: string;
}

interface specialistData {
  id: string;
  firstName: string;
  lastName: string;
  followed: boolean;
  profilePicIndex: number;
}
