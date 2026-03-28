export interface PageInfoData {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
  endCursor?: string | null;
}

export interface PlainConnectionConfig<N> {
  nodes: N[];
  pageInfo: PageInfoData;
  totalCount?: number;
  fetch: (cursor: { after?: string; before?: string }) => Promise<PlainConnection<N>>;
}

export class PlainConnection<N> {
  public readonly nodes: N[];
  public readonly pageInfo: PageInfoData;
  public readonly totalCount?: number;

  private _fetch: (cursor: { after?: string; before?: string }) => Promise<PlainConnection<N>>;

  constructor(config: PlainConnectionConfig<N>) {
    this.nodes = config.nodes;
    this.pageInfo = {
      hasNextPage: config.pageInfo.hasNextPage,
      hasPreviousPage: config.pageInfo.hasPreviousPage,
      startCursor: config.pageInfo.startCursor ?? null,
      endCursor: config.pageInfo.endCursor ?? null,
    };
    this.totalCount = config.totalCount;
    this._fetch = config.fetch;
  }

  get hasNextPage(): boolean {
    return this.pageInfo.hasNextPage;
  }

  get hasPreviousPage(): boolean {
    return this.pageInfo.hasPreviousPage;
  }

  async fetchNext(): Promise<PlainConnection<N> | undefined> {
    if (!this.pageInfo.hasNextPage || !this.pageInfo.endCursor) return undefined;
    return this._fetch({ after: this.pageInfo.endCursor });
  }

  async fetchPrevious(): Promise<PlainConnection<N> | undefined> {
    if (!this.pageInfo.hasPreviousPage || !this.pageInfo.startCursor) return undefined;
    return this._fetch({ before: this.pageInfo.startCursor });
  }
}
