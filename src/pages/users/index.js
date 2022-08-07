import { Divider } from "antd";
import {Link} from "react-router-dom";
import Avatar from "components/blrmn/Avatar";
import React , {useState , useEffect} from "react"
import { userService } from "services"
import style from './style.module.scss'

const ListOfUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = () =>{
    userService.getUsers().then(result => {
      const {data} = result;
      console.log(data);
      setUsers(data)
    })
  }

  return (
    <ul className="list-unstyled">
      <div className="text-dark font-size-48 font-weight-bold mb-2">
        Registered Users
        <Divider />
      </div>
      {users && users.map(user =>
        <li className={style.item}>
          <div className={style.itemPic}>
            <Avatar author={user.avatar} type="primary" size={10} />
            {/* <img src={user.avatar} alt="Jamie Rockstar" /> */}
          </div>
          <div className="flex-fill">
            <div className="font-weight-bold text-dark">{user.name} {user.surname}</div>
            <div className="text-muted">{user.email}</div>
          </div>
          <Link to={`/author/profile/${user.id}`}>
            <a href="" className="btn btn-outline-primary align-self-end">
              Profile
            </a>
          </Link>

        </li>
      )}
    </ul>
  )
}

export default ListOfUsers

