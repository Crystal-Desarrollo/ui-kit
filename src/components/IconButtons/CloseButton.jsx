import {Close} from '@mui/icons-material';
import {BaseIconButton} from '@/components/common/IconButtons/BaseIconButton';

export const CloseButton = ({onClick, tooltipText, ...rest}) => {
  return <BaseIconButton icon={Close} onClick={onClick} tooltipText={tooltipText} {...rest} />;
};
