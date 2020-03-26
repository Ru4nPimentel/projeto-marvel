export interface Personagem{
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: resultado[];
  };

}
export type resultado = {
  [key: string]: {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: { path: string; extesion: string };
  };
};
