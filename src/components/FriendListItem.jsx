import PropTypes from 'prop-types';

export const FriendListItem = ({friend: {avatar, name, isOnline},}) => {
    return (
        <li>
  <span>{isOnline}</span>
  <img  src={avatar} alt={name} width="48" />
  <p>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
}