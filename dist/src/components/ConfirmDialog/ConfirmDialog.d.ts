export default ConfirmDialog;
declare function ConfirmDialog({ open, title, description, onConfirm, onCancel, isLoading, error, children, sx, }: {
    open: any;
    title: any;
    description: any;
    onConfirm: any;
    onCancel: any;
    isLoading: any;
    error: any;
    children: any;
    sx: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ConfirmDialog {
    namespace propTypes {
        const open: PropTypes.Validator<boolean>;
        const title: PropTypes.Requireable<string>;
        const description: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        const onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
        const onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        const isLoading: PropTypes.Requireable<boolean>;
        const error: PropTypes.Requireable<string>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const sx: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
