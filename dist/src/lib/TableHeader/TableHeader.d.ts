export default TableHeader;
declare function TableHeader(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace TableHeader {
    namespace propTypes {
        const orderBy: PropTypes.Requireable<string>;
        const orderDirection: PropTypes.Requireable<string>;
        const headCells: PropTypes.Requireable<any[]>;
        const handleSortRequest: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
