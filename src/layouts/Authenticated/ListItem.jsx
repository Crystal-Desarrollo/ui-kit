import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ListItem = ({ icon, text, url, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={url ?? ''}
      style={{
        textDecoration: 'none',
        color: 'rgb(0 0 0 / 80%)',
      }}
    >
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </Link>
  );
};

ListItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  onClick: PropTypes.func,
};
