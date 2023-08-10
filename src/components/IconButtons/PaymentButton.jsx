import {PaymentOutlined} from '@mui/icons-material';
import {BaseIconButton} from '@/components/common/IconButtons/BaseIconButton';

export const PaymentButton = ({onClick, tooltipText, has, ...rest}) => {
  return (
    <BaseIconButton
      icon={PaymentOutlined}
      onClick={onClick}
      tooltipText={tooltipText}
      has={has}
      color="primary"
      {...rest}
    />
  );
};
