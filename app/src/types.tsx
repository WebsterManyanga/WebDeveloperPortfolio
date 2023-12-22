export interface ProjectType {
  id: number,
  title: string,
  repo: string,
  link: string,
  description: string,
  date: string,
  image: string
  category: 'portfolios'| 'business'| 'ecommerce' | 'entertainment'
}

export interface Certificate {
  title: string,
  picture: string,
  link: string,
  linkSource: string,
}