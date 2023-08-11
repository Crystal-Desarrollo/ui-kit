export default Box;
declare function Box({ children, style, sx, component, noSpacing, isLoading, ...rest }: {
    [x: string]: any;
    children: any;
    style: any;
    sx: any;
    component: any;
    noSpacing?: boolean | undefined;
    isLoading?: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Box {
    namespace propTypes {
        const children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        const style: PropTypes.Requireable<object>;
        const sx: PropTypes.Requireable<object>;
        const component: PropTypes.Requireable<string>;
        const noSpacing: PropTypes.Requireable<boolean>;
        const isLoading: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
