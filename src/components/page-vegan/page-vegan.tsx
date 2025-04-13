import { Flex } from '@chakra-ui/react';

import { Blogs } from '../blogs';
import { NewRecipes } from '../new-recipes';
import { RelevantKitchen } from '../relevant-kitchen';
import { SearchList } from '../search-list';
import { TheJuiciest } from '../the-juiciest';

export const PageVegan = () => (
    <Flex
        width='1360px'
        flexDirection='column'
        alignItems='center'
        gap={10}
        h='fit-content'
        ml={6}
        mt='80px'
    >
        <SearchList
            heading='Веганская кухня'
            descr='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
        <NewRecipes />
        <TheJuiciest />
        <Blogs />
        <RelevantKitchen />
    </Flex>
);
