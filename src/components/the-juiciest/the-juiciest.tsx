import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router';

import { CardProps } from '~/types/card';

import { CardJuiciest } from '../card-juiciest';
import { ArrowRight } from '../icons/arrow-right';

export const TheJuiciest: FC<{ title: string; cards: CardProps[] }> = ({ title, cards }) => (
    <Flex flexDirection='column' gap={6} w='100%'>
        {title != '' && (
            <Flex justifyContent='space-between'>
                <Heading size='2xl' fontWeight={500}>
                    {title}
                </Heading>
                <Link to='/juiciest'>
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
                        background='lime.400'
                    >
                        Вся подборка
                    </Button>
                </Link>
            </Flex>
        )}

        <SimpleGrid columns={2} spacing={6}>
            <CardJuiciest cards={cards} />
        </SimpleGrid>
    </Flex>
);
