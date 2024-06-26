import { Link } from 'react-router-dom'
import { ProfileImage } from '@/shared/components/ProfileImage'

export const UserListItem = ({ user }) => {
  //   const [selectedUser, setSelectedUser] = useState(false);
  return (
    <Link
      to={`/user/${user.id}`}
      className='list-group-item list-group-item-action'
      style={{ textDecoration: 'none' }}
    >
      <ProfileImage width={30} image={user.image} />
      <span className='ms-2'>{user.username}</span>
    </Link>
  )
}
