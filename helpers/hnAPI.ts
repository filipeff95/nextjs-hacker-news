const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
const newStoriesUrl = `${baseUrl}topstories.json`
const storyUrl = `${baseUrl}item/`

export const getStoryIds = async () => {
  let data: number[] | undefined

  await fetch(newStoriesUrl).then((res) =>
    res.json().then((json) => (data = json as number[]))
  )

  return data
}

export interface Story {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url?: string
}

export const getStory = async (id: number) => {
  let data: Story | undefined
  const url = storyUrl + `/${id}.json`

  await fetch(url).then((res) =>
    res.json().then((json) => (data = json as Story))
  )

  return data
}

export const getStories = async (ids: number[]) => {
  let data: Story[] | undefined
  let requests: Promise<Story | undefined>[] = []

  ids.forEach((id) => {
    requests.push(getStory(id))
  })

  await Promise.all(requests).then((res) => (data = res as Story[]))

  return data
}
