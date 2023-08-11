export default ErrorDialog;
declare function ErrorDialog({ open, onConfirm, children }: {
    open: any;
    onConfirm: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace ErrorDialog {
    namespace propTypes {
        const open: PropTypes.Validator<boolean>;
        const onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
