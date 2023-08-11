export default Box;
declare function Box({ children, style, sx, component, onSubmit, mb, mt, isLoading, ...rest }: {
    [x: string]: any;
    children: any;
    style: any;
    sx: any;
    component: any;
    onSubmit: any;
    mb: any;
    mt: any;
    isLoading?: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Box {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const style: PropTypes.Requireable<object>;
        const sx: PropTypes.Requireable<object>;
        const component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        const onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        const isLoading: PropTypes.Requireable<boolean>;
        const marginBottom: PropTypes.Requireable<string>;
        const marginTop: PropTypes.Requireable<string>;
        const mb: PropTypes.Requireable<number>;
        const mt: PropTypes.Requireable<number>;
    }
}
import PropTypes from "prop-types";
