import React from 'react'
import {Link} from "react-router-dom";
import config from "config";

const Avatar = ({author, size = 46, border = false, borderColor, type = "default"} ) => {
  return (
    <>
      {author && (
        <Link to={`/author/profile/${author.id}`}>
          <div className={`kit__utils__avatar kit__utils__avatar--rounded kit__utils__avatar--size${size} ${border ? 'border' : ''} border-5 border-${borderColor}`}>
            {author.avatar &&
              <img
                src={`${config.apiUrl}/users/${author.id}/avatar`}
                alt={author.name}
                onError={(e)=>{e.target.onerror = null; e.target.src=`/resources/images/avatars/avatar-${type}.png`}}
              />}
            {!author.avatar && <img src={`/resources/images/avatars/avatar-${type}.png`} alt={author.name} />}
          </div>
        </Link>
      )}
    </>
  )
}

export default Avatar
