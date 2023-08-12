import type { Preview } from '@storybook/react';
import { theme } from '../src/utils/Table/Table';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story: any) => {
    const queryClient = new QueryClient();

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    );
  },
];
export default preview;
