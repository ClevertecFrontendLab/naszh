import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { cardsrecipe } from '~/mocks/cards';

import { CardKitchenL } from '../card-kitchen/card-kitchen-l';
import { CardKitchenR } from '../card-kitchen/card-kitcken-r';

export const RelevantKitchen = () => (
    <Flex
        flexDirection='column'
        w='100%'
        gap={6}
        pt={6}
        borderTop='1px solid'
        borderColor='blackAlpha.200'
    >
        <Flex gap='300px'>
            <Heading size='2xl' fontWeight={500} whiteSpace='nowrap'>
                Веганская кухня
            </Heading>
            <Text fontWeight={500} color='blackAlpha.700'>
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Flex>
        <Flex gap={6}>
            <CardKitchenL cards={cardsrecipe} />
            <Stack gap={3}>
                <CardKitchenR cards={cardsrecipe} />
            </Stack>
        </Flex>
    </Flex>
);
