import '../../styles/truncate-text.css';

import { Badge, Card, CardBody, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { CardProps } from '~/types/card';

export const CardRecipe: FC<{ cards: CardProps[] }> = ({ cards }) =>
    cards.map((card) => (
        <Card maxW='322px'>
            <CardBody p={0}>
                <Image src={card.image} alt={card.alt} borderRadius='8px 8px 0 0' />
                <Stack pt={4} px={6} pb={5} spacing='6'>
                    <Stack>
                        <Heading className='truncate-heading' size='md' fontWeight={500}>
                            {card.title}
                        </Heading>
                        <Text className='truncate-text' fontSize='14px' lineHeight='143%'>
                            {card.desciption}
                        </Text>
                    </Stack>
                    <Flex justifyContent='space-between'>
                        <Badge
                            display='flex'
                            gap={2}
                            bgColor='lime.150'
                            py='2px'
                            px='8px'
                            borderRadius='4px'
                        >
                            <Icon as={card.icon} boxSize='16px' alignSelf='center' />
                            <Text
                                textTransform='none'
                                fontWeight={400}
                                fontSize='14px'
                                color='black'
                            >
                                {card.tag}
                            </Text>
                        </Badge>
                        <Flex alignItems='center' gap='6px'>
                            {card.bookmarks?.map((i) => (
                                <>
                                    <Icon as={i.type} boxSize='12px' alignSelf='center' />
                                    <Text fontSize='12px' fontWeight={600}>
                                        {i.count}
                                    </Text>
                                </>
                            ))}
                        </Flex>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    ));
