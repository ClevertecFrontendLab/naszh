import { Box, Flex } from '@chakra-ui/react';

import { cardsrecipe, cardsveg } from '~/mocks/cards';

import { RelevantKitchen } from '../relevant-kitchen';
import { SearchList } from '../search-list';
import { TheJuiciest } from '../the-juiciest';

export const PageJuiciest = () => (
    <Flex
        width='1360px'
        flexDirection='column'
        alignItems='center'
        h='fit-content'
        ml={6}
        mt='80px'
    >
        <SearchList heading='Самое сочное' descr='' />
        <TheJuiciest title='' cards={cardsveg} />
        <Box h={10} />
        <RelevantKitchen
            title='Веганская кухня'
            desc='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.'
            cards={cardsrecipe}
        />
    </Flex>
);
