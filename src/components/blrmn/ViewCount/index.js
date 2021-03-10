import React from "react";
import {Tooltip} from 'antd'
import {EyeOutlined} from '@ant-design/icons';
import style from './style.module.scss'

const ViewCount = ({count, type}) => {
  return (
    <Tooltip title="Views" placement="top">
      <div className={`${style.container} ${style[type]}`}>
        <span className="font-italic mr-2">{count}</span>
        <EyeOutlined className={style.icon} />
      </div>
    </Tooltip>
  )
}

export default ViewCount
