import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';

import { Header } from './components/header/header';
import { Nav } from './components/nav/nav';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <App /> <Header /> <Nav />
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
