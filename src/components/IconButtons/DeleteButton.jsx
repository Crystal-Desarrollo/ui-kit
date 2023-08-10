import DeleteIcon from '@mui/icons-material/Delete';
import {BaseIconButton} from '@/components/common/IconButtons/BaseIconButton';

export const DeleteButton = ({onClick, tooltipText, has, ...rest}) => {
  return <BaseIconButton icon={DeleteIcon} onClick={onClick} tooltipText={tooltipText} has={has} {...rest} />;
};
