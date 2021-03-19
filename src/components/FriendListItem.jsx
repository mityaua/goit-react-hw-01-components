import PropTypes from 'prop-types';
import noAvatar from '../images/noavatar.svg';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </>
);

FriendListItem.defaultProps = {
  avatar: noAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
