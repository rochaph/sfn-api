export type EventLaunch = {
  id: string;
  provider: string;
};
export interface ArticleParams {
  id?: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  launches: EventLaunch[];
  events: EventLaunch[];
}

export default class Article {
  public id?: number;
  public featured: boolean;
  public title: string;
  public url: string;
  public imageUrl: string;
  public newsSite: string;
  public summary: string;
  public publishedAt: Date;
  public launches: EventLaunch[];
  public events: EventLaunch[];

  constructor(article: ArticleParams) {
    this.id = article.id;
    this.featured = article.featured;
    this.title = article.title;
    this.url = article.url;
    this.imageUrl = article.imageUrl;
    this.newsSite = article.newsSite;
    this.summary = article.summary;
    this.publishedAt = article.publishedAt;
    this.launches = article.launches;
    this.events = article.events;
  }
}
