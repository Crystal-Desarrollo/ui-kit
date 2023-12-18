import { useSearchParams } from 'react-router-dom';

export default function useTabs(defaultTab = 1) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') ? Number(searchParams.get('tab')) : defaultTab;

  const handleChange = (event, newValue) => {
    setSearchParams({ tab: newValue });
  };

  return {
    tab,
    onChangeTab: handleChange,
  };
}
