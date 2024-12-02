export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  status: string;
  image: string;
  description: string;
}

export interface ProjectFilters {
  category: string;
  location: string;
  status: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  count: number;
}