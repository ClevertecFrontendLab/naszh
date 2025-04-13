import './index.css';

import { ChakraProvider, Flex } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';

import { Header } from './components/header';
import { Nav } from './components/nav';
import { PageVegan } from './components/page-vegan/page-vegan';
// import { PageMain } from './components/page-main';
import { Sidebar } from './components/sidebar';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <App /> <Header />
                <Flex flex={1} margin='0 256px'>
                    <Nav />
                    {/* <PageMain /> */}
                    <PageVegan />
                    <Sidebar />
                </Flex>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
