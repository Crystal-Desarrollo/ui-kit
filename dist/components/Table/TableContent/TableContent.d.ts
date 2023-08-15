export default TableContent;
declare function TableContent(props: any): import("react/jsx-runtime").JSX.Element;
declare namespace TableContent {
    namespace propTypes {
        const headCells: PropTypes.Validator<any[]>;
        const records: PropTypes.Requireable<any[]>;
        const customPropertiesComparator: PropTypes.Requireable<(...args: any[]) => any>;
        const defaultRowsPerPage: PropTypes.Requireable<number>;
        const isLoading: PropTypes.Requireable<boolean>;
        const defaultOrderBy: PropTypes.Requireable<string>;
        const defaultOrderDirection: PropTypes.Requireable<string>;
        const row: PropTypes.Requireable<PropTypes.ReactElementLike>;
    }
}
import PropTypes from "prop-types";
