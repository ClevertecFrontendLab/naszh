import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import { cardsjuiciest } from '~/mocks/cards';

import { CardJuiciest } from '../card-juiciest';
import { ArrowRight } from '../icons/arrow-right';

export const TheJuiciest = () => (
    <Flex flexDirection='column' gap={6} w='100%'>
        <Flex justifyContent='space-between' mt={4}>
            <Heading size='2xl' fontWeight={500}>
                Самое сочное
            </Heading>
            <Button
                rightIcon={
                    <Box color='#000'>
                        <ArrowRight boxSize={4} />
                    </Box>
                }
                variant='solid'
                fontWeight={600}
                fontSize='18px'
                color='#000'
                h='100%'
                px={6}
                py={2.5}
                background='#b1ff2e'
            >
                Вся подборка
            </Button>
        </Flex>
        <SimpleGrid columns={2} spacing={6}>
            <CardJuiciest cards={cardsjuiciest} />
        </SimpleGrid>
    </Flex>
);
