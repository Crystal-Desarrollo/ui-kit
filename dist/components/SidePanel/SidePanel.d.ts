export function SidePanel({ children, open, onClose, onAccept, onCancel }: {
    children: any;
    open: any;
    onClose: any;
    onAccept: any;
    onCancel: any;
}): import("react/jsx-runtime").JSX.Element;
export namespace SidePanel {
    namespace propTypes {
        const open: PropTypes.Validator<boolean>;
        const onAccept: PropTypes.Requireable<(...args: any[]) => any>;
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
