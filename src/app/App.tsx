import './App.css';

import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import { Header } from '~/components/header';
import { Nav } from '~/components/nav';
import { PageJuiciest } from '~/components/page-juiciest';
import { PageMain } from '~/components/page-main';
import { PageVegan } from '~/components/page-vegan';
import { Sidebar } from '~/components/sidebar';

// import { useState } from 'react';
// import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    // const [count, setCount] = useState(0);
    // const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <Header />
            <Flex flex={1} margin='0 256px'>
                <Nav />
                <Routes>
                    <Route path='/' element={<PageMain />} />
                    <Route path='/vegan/*' element={<PageVegan />} />
                    <Route path='/vegan' element={<PageVegan />} />
                    <Route path='/juiciest' element={<PageJuiciest />} />
                </Routes>
                <Sidebar />
            </Flex>
        </>
    );
}

export default App;
