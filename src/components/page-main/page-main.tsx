import { Flex } from '@chakra-ui/react';

import { Blogs } from '../blogs';
import { NewRecipes } from '../new-recipes';
import { RelevantKitchen } from '../relevant-kitchen';
import { SearchList } from '../search-list';
import { TheJuiciest } from '../the-juiciest';

export const PageMain = () => (
    <Flex
        width='1360px'
        flexDirection='column'
        alignItems='center'
        gap={10}
        h='fit-content'
        ml={6}
        mt='80px'
    >
        <SearchList heading='Приятного аппетита!' />
        <NewRecipes />
        <TheJuiciest />
        <Blogs />
        <RelevantKitchen />
    </Flex>
);
