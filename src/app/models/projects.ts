export interface Icon {
  path: string;
  color: string;
}

export interface Projects {
  title: string;
  subtitle: string;
  description?: string;
  icons: Icon[]
  linkGithub: string;
}
