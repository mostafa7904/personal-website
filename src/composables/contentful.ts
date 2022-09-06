import * as contentful from 'contentful'

export const useContentFul = () => {
  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE as string,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string
  })

  return [client]
}
