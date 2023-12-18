export default function useTabs(defaultTab?: number): {
    tab: number;
    onChangeTab: (event: any, newValue: any) => void;
};
