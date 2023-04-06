export interface Movie {
  id: number;
  title: string;
  description: string;
  posterImgPath: string;
  category: string;
  director: string;
  castMembers: string[];
  dateReleased: Date;
}
