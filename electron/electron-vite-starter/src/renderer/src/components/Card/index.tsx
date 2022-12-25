import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.less'

export interface ICardProps {
  image: string
  title: string
  subTitle: string
  url: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Card = (props: ICardProps) => {
  const { url, image, title, subTitle } = props
  const navigate = useNavigate()

  const onClick = (): void => {
    if (url) {
      if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
        location.href = url
      } else {
        navigate(url)
      }
    }
  }

  return (
    <div className="service-item">
      <div className="item-image">
        <img src={image} alt="" />
      </div>
      <h3 className="item-title">{title}</h3>
      <div className="item-text">{subTitle}</div>
      <span className="item-link" onClick={onClick}>
        我要使用
      </span>
    </div>
  )
}

export default React.memo(Card)
