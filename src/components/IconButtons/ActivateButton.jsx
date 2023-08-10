import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import {BaseIconButton} from '@/components/common/IconButtons/BaseIconButton';

export const ActivateButton = ({onClick, tooltipText, has, ...rest}) => {
  return <BaseIconButton icon={RestoreFromTrashIcon} onClick={onClick} tooltipText={tooltipText} has={has} {...rest} />;
};
