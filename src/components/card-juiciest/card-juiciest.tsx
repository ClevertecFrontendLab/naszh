import '../../styles/truncate-text.css';

import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    Flex,
    Heading,
    Icon,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { CardProps } from '~/types/card';

import { BookmarkHeart } from '../icons/bookmark-heart';

export const CardJuiciest: FC<{ cards: CardProps[] }> = ({ cards }) =>
    cards.map((card) => (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                // width='668px'
                width='100%'
                borderRadius='8px'
                maxH='244px'
            >
                <Image
                    src={card.image}
                    alt={card.alt}
                    borderRadius='8px 0 0 8px'
                    pos='relative'
                    boxSize='100%'
                    objectFit='cover'
                />
                {card.user && (
                    <Flex
                        alignItems='center'
                        borderRadius='4px'
                        p='4px 8px'
                        bg='lime.150'
                        pos='absolute'
                        bottom='7px'
                        left='24px'
                        transform='translateY(-50%)'
                        aria-label='recommendation'
                    >
                        <Avatar src={card.user?.img} boxSize={4} />
                        <Box ml='2'>
                            <Text fontSize='14px'>
                                {card.user?.firstName} {card.user?.lastName} рекомендует
                            </Text>
                        </Box>
                    </Flex>
                )}
                <Stack py={5} px={6} spacing='6' w='full'>
                    <Flex justifyContent='space-between'>
                        <Badge
                            display='flex'
                            gap={2}
                            bgColor='lime.50'
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
                    <Box maxW='274px'>
                        <Heading className='truncate-heading' size='md' fontWeight={500}>
                            {card.title}
                        </Heading>
                    </Box>
                    <Box maxW='274px'>
                        <Text className='truncate-text' fontSize='14px' lineHeight='143%'>
                            {card.desciption}
                        </Text>
                    </Box>
                    <Stack direction='row' spacing={2} justifyContent='right'>
                        <Button
                            leftIcon={<BookmarkHeart />}
                            variant='outline'
                            borderColor='blackAlpha.600'
                            color='blackAlpha.800'
                            p='0 12px'
                            fontSize='14px'
                            height='32px'
                        >
                            Сохранить
                        </Button>
                        <Button
                            variant='solid'
                            borderColor='blackAlpha.200'
                            backgroundColor='blackAlpha.900'
                            color='#fff'
                            p='0 12px'
                            fontSize='14px'
                            height='32px'
                        >
                            Готовить
                        </Button>
                    </Stack>
                </Stack>
            </Card>
        </>
    ));
