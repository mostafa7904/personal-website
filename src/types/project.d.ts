export declare interface ProjectEntry {
  createdAt: string
  image: {
    sys: {
      id: string
    }
  }
  title: string
  link: string
  description: string
  sourceLink: string
  sourceType: SourceTypes
  tags: string[]
}

export declare interface Project {
  createdAt: string
  image: string
  title: string
  link: string
  description: string
  sourceLink: string
  sourceType: SourceTypes
  tags: string[]
}

export enum SourceTypes {
  GITHUB,
  GITLAB
}
