import './index.css';

import { ChakraProvider, Flex } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';

import { Header } from './components/header/header';
import { Nav } from './components/nav';
import { NewRecipes } from './components/new-recipes/new-recipes';
import { SearchList } from './components/search-list/search-list';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <App /> <Header />
                <Flex>
                    <Nav />
                    <Flex
                        width='1360px'
                        flexDirection='column'
                        alignItems='center'
                        gap={6}
                        h='fit-content'
                        ml={6}
                    >
                        <SearchList />
                        <NewRecipes />
                    </Flex>
                </Flex>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
