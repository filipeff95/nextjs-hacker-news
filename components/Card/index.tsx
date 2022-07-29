import { FC } from 'react'
import { Story } from '../../helpers/hnAPI'
import css from './card.module.css'

interface Props {
  story: Story
}

const Card: FC<Props> = ({ story }) => {
  const { by, url, title, time, score } = story

  const domain = url ? new URL(url) : ''

  return (
    <div className={css.host}>
      <div className={css.titleWrapper}>
        <a className={css.title} href={url}>
          {title}
        </a>

        {domain && (
          <span className={css.supportText}>
            ({domain.hostname.replace('www.', '')})
          </span>
        )}
      </div>

      <span className={css.supportText}>
        {score} points by {by} | {time} minutes ago
      </span>
    </div>
  )
}

export default Card
