export interface Comics{
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
    title: string;
    issueNumber: number;
    variantDescription:string;
    description: string;
    modified: string;
    urls: urls[];
    thumbnail: { path: string; extesion: string };
  };
};


export type urls = {
  [key: string]: {
    type: string;
    url: string;
  }
}
