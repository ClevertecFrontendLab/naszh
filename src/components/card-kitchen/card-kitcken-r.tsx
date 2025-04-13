import '../../styles/truncate-text.css';

import { Button, Card, CardBody, Heading, Icon, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { CardProps } from '~/types/card';

export const CardKitchenR: FC<{ cards: CardProps[] }> = ({ cards }) =>
    cards.slice(1, 4).map((card) => (
        <Card w='668px'>
            <CardBody p={0}>
                <Stack
                    py={3}
                    px={6}
                    spacing='3'
                    flexDirection='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Heading size='md' fontWeight={500}>
                        <Icon as={card.icon} boxSize='24px' alignSelf='center' mr='12px' />
                        {card.title}
                    </Heading>
                    <Button
                        variant='outline'
                        borderColor='#2db100'
                        color='#2db100'
                        p='0 12px'
                        fontSize='14px'
                        height='32px'
                    >
                        Готовить
                    </Button>
                </Stack>
            </CardBody>
        </Card>
    ));
