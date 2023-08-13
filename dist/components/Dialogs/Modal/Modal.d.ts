export default Modal;
declare function Modal({ open, onClose, children, sx, disableCloseOnBackdropClick, isLoading, ...rest }: {
    [x: string]: any;
    open: any;
    onClose: any;
    children: any;
    sx: any;
    disableCloseOnBackdropClick?: boolean | undefined;
    isLoading?: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Modal {
    namespace propTypes {
        const open: PropTypes.Validator<boolean>;
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const sx: PropTypes.Requireable<object>;
        const disableCloseOnBackdropClick: PropTypes.Requireable<boolean>;
        const isLoading: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
