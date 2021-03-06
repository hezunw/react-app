import React from 'react'
import Level from '@components/Level'
import LazyImg from '@components/LazyImg'
import EmptyImage from '@assets/icons/post/entry_image_default.png'
import './style.less'

let Price = ({book}) => {
  let {price} = book
  let content = price ? '¥' + price : '免费'
  return (
    <div className="price">
      <div>{content}</div>
    </div>
  )
}

let Entry = props => {
  let {book} = props
  return (
    <div className="bookEntry">
      <div className="left">
        <div className="bookCover">
          <LazyImg src={book.img} alternate={EmptyImage} />
        </div>
        <div className="detail">
          <h4>{book.title}</h4>
          <div className="author">
            {book.userData.username}{' '}
            <Level level={book.userData.level} size="sm" />
          </div>
          <small>
            {book.section.length}
            {'小节 · '}
            {book.buyCount}
            {'人已购买'}
          </small>
        </div>
      </div>
      <div className="right">{book.isBuy ? '已购' : <Price book={book} />}</div>
    </div>
  )
}

export default Entry
