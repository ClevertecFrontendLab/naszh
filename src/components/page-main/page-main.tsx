import { Flex } from '@chakra-ui/react';

import { cardsjuiciest, cardsrecipe } from '~/mocks/cards';

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
        <TheJuiciest title='Самое сочное' cards={cardsjuiciest} />
        <Blogs />
        <RelevantKitchen
            title='Веганская кухня'
            desc='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.'
            cards={cardsrecipe}
        />
    </Flex>
);
