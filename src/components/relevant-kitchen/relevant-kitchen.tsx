import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { CardProps } from '~/types/card';

import { CardKitchenL } from '../card-kitchen/card-kitchen-l';
import { CardKitchenR } from '../card-kitchen/card-kitcken-r';

export const RelevantKitchen: FC<{ title: string; desc: string; cards: CardProps[] }> = ({
    title,
    desc,
    cards,
}) => (
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
                {title}
            </Heading>
            <Text fontWeight={500} color='blackAlpha.600'>
                {desc}
            </Text>
        </Flex>
        <Flex gap={6}>
            <CardKitchenL cards={cards} />
            <Stack gap={3}>
                <CardKitchenR cards={cards} />
            </Stack>
        </Flex>
    </Flex>
);
