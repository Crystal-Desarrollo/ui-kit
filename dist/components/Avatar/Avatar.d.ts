export default Avatar;
declare function Avatar({ name, profilePicture, size, sx, ...rest }: {
    [x: string]: any;
    name: any;
    profilePicture: any;
    size?: number | undefined;
    sx: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Avatar {
    namespace propTypes {
        const profilePicture: any;
        const size: PropTypes.Requireable<number>;
        const sx: PropTypes.Requireable<object>;
        const name: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
