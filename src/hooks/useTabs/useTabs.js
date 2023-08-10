import {useSearchParams} from 'react-router-dom';

export function useTabs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = Number(searchParams.get('tab')) || 1;

  const handleChange = (event, newValue) => {
    setSearchParams({tab: newValue});
  };

  return {
    tab,
    onChangeTab: handleChange,
  };
}
