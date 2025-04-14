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
                <Heading size='2xl' fontWeight={500} fontSize={{ lg: '36px', xl: '48px' }}>
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
                        fontSize={{ lg: '16px', xl: '18px' }}
                        color='#000'
                        h='100%'
                        px={{ lg: 4, xl: 6 }}
                        py={{ lg: 2, xl: 2.5 }}
                        lineHeight='150%'
                        background='lime.400'
                    >
                        Вся подборка
                    </Button>
                </Link>
            </Flex>
        )}

        <SimpleGrid columns={{ lg: 1, xl: 2 }} spacing={{ lg: 4, xl: 6 }}>
            <CardJuiciest cards={cards} />
        </SimpleGrid>
    </Flex>
);
