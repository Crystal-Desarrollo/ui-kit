export default Modal;
declare function Modal({ open, onClose, children, sx, renderBox, disableCloseOnBackdropClick, isLoading, ...rest }: {
    [x: string]: any;
    open: any;
    onClose: any;
    children: any;
    sx: any;
    renderBox?: boolean | undefined;
    disableCloseOnBackdropClick?: boolean | undefined;
    isLoading?: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Modal {
    namespace propTypes {
        const open: PropTypes.Validator<boolean>;
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const style: PropTypes.Requireable<object>;
        const renderBox: PropTypes.Requireable<boolean>;
        const disableCloseOnBackdropClick: PropTypes.Requireable<boolean>;
        const isLoading: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
