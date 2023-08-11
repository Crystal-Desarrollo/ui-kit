export default Avatar;
declare function Avatar({ name, profile_picture, size, sx, ...rest }: {
    [x: string]: any;
    name: any;
    profile_picture: any;
    size?: number | undefined;
    sx: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Avatar {
    namespace propTypes {
        const profile_picture: PropTypes.Requireable<PropTypes.InferProps<{
            url: PropTypes.Requireable<string>;
        }>>;
        const size: PropTypes.Requireable<number>;
        const sx: PropTypes.Requireable<object>;
        const name: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
