import { FC } from 'react'

import css from './button.module.css'
import Loading from './Loading'

interface Props {
  label: string
  onClick: Function
  loading?: boolean
}

const Button: FC<Props> = ({ label, onClick, loading }) => {
  return (
    <button className={css.host} onClick={() => onClick()} disabled={loading}>
      {!loading ? label : <Loading className={css.loadingIcon} />}
    </button>
  )
}

export default Button
