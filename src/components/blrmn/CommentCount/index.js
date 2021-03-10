import React from "react";
import {Tooltip} from 'antd'
import {MessageOutlined} from '@ant-design/icons';
import style from './style.module.scss'

const CommentCount = ({count, type}) => {
  return (
    <Tooltip title="Comments" placement="top">
      <div className={`${style.container} ${style[type]}`}>
        <span className="font-italic mr-2">{count}</span>
        <MessageOutlined className={`${style.icon}`} />
      </div>
    </Tooltip>
  )
}

export default CommentCount
