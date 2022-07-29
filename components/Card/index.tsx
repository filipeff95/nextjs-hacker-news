import { FC } from 'react'
import css from './card.module.css'

interface Props {
  by: string
  score: number
  time: number
  title: string
  url: string
}

const Card: FC<Props> = ({ by, score, time, title, url }) => {
  const domain = new URL(url)

  return (
    <div className={css.host}>
      <div className={css.titleWrapper}>
        <a className={css.title} href={url}>
          {title}
        </a>

        <span className={css.supportText}>
          ({domain.hostname.replace('www.', '')})
        </span>
      </div>

      <span className={css.supportText}>
        {score} points by {by} | {time} minutes ago
      </span>
    </div>
  )
}

export default Card
