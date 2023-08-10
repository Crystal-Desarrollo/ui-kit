import {IconButton as MuiIconButton, Tooltip} from '@mui/material';
import PropTypes from 'prop-types';
import {Permission} from '@/components/common/Permission';

export const BaseIconButton = ({onClick, tooltipText, icon, has, ...rest}) => {
  const Icon = icon;

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Permission has={has}>
      <Tooltip title={tooltipText || ''}>
        <span>
          <MuiIconButton onClick={handleClick} size="small" {...rest}>
            <Icon />
          </MuiIconButton>
        </span>
      </Tooltip>
    </Permission>
  );
};

BaseIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  tooltipText: PropTypes.string,
  icon: PropTypes.object.isRequired,
};
