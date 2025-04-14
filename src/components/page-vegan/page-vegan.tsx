import { Box, Flex } from '@chakra-ui/react';

import { cardssweet } from '~/mocks/cards';

import { RelevantKitchen } from '../relevant-kitchen';
import { SearchList } from '../search-list';
import { TabsRow } from '../tabs-row';

export const PageVegan = () => (
    <Flex
        width='1360px'
        flexDirection='column'
        alignItems='center'
        h='fit-content'
        ml={6}
        mt='80px'
    >
        <SearchList
            heading='Веганская кухня'
            descr='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
        <TabsRow />
        <Box h={10} />
        <RelevantKitchen
            title='Десерты, выпечка'
            desc='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
            cards={cardssweet}
        />
    </Flex>
);
