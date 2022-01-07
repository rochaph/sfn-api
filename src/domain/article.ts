export type EventLaunch = {
  id: string;
  provider: string;
};
export interface ArticleEntity {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: EventLaunch[];
  events: EventLaunch[];
}

export default class Article implements ArticleEntity {
  private _id: number;
  private _featured: boolean;
  private _title: string;
  private _url: string;
  private _imageUrl: string;
  private _newsSite: string;
  private _summary: string;
  private _publishedAt: string;
  private _launches: EventLaunch[];
  private _events: EventLaunch[];

  constructor(article: ArticleEntity) {
    this._id = article.id;
    this._featured = article.featured;
    this._title = article.title;
    this._url = article.url;
    this._imageUrl = article.imageUrl;
    this._newsSite = article.newsSite;
    this._summary = article.summary;
    this._publishedAt = article.publishedAt;
    this._launches = article.launches;
    this._events = article.events;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get featured(): boolean {
    return this._featured;
  }

  set featured(featured: boolean) {
    this._featured = featured;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get url(): string {
    return this._url;
  }

  set url(url: string) {
    this.url = url;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(imageUrl: string) {
    this._imageUrl = imageUrl;
  }

  get newsSite(): string {
    return this._newsSite;
  }

  set newsSite(newsSite: string) {
    this._newsSite = newsSite;
  }

  get summary(): string {
    return this._summary;
  }

  set summary(summary: string) {
    this._summary = summary;
  }

  get publishedAt(): string {
    return this._publishedAt;
  }

  set publishedAt(publishedAt: string) {
    this._publishedAt = publishedAt;
  }

  get launches(): EventLaunch[] {
    return this._launches;
  }

  set launches(launches: EventLaunch[]) {
    this._launches = launches;
  }

  get events(): EventLaunch[] {
    return this._events;
  }

  set events(events: EventLaunch[]) {
    this._events = events;
  }
}
