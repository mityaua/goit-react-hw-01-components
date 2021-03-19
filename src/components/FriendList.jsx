import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import noavatar from '../images/noavatar.svg';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className="item" key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  friends: noavatar,
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendList;
