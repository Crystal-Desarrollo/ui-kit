import {Edit as EditIcon} from '@mui/icons-material';
import {BaseIconButton} from '@/components/common/IconButtons/BaseIconButton';
import {Link} from 'react-router-dom';

export const EditButton = ({onClick, tooltipText, has, ...rest}) => {
  return (
    <BaseIconButton
      component={Link}
      icon={EditIcon}
      onClick={onClick || (() => {})}
      tooltipText={tooltipText}
      has={has}
      color="primary"
      {...rest}
    />
  );
};
