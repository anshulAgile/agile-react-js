import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { setupAxios } from '../utils/functions';
import { ErrorBoundary } from '../components/common/Error';
import GlobalStyle from 'style/global';
import { store } from 'services/redux/store';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LoaderWrapper } from 'components/common/loader';

setupAxios(store);

const queryClient = new QueryClient();

const AppContainer = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <LoaderWrapper>
              <h6 style={{ textAlign: 'center' }}>Loading</h6>
            </LoaderWrapper>
          }
        >
          <BrowserRouter>
            <GlobalStyle />
            <Routes />
          </BrowserRouter>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </Provider>
  </ErrorBoundary>
);

export default AppContainer;
