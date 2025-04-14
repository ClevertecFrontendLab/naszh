import { Button, Flex, Stack, Text } from '@chakra-ui/react';

import { BookmarkHeart } from '../icons/bookmark-heart';
import { EmojiHeartEyes } from '../icons/emoji-heart-eyes';
import { PeopleFill } from '../icons/people-fill';
import { WriteDown } from '../icons/write-down';

export const Sidebar = () => (
    <Flex
        pos='fixed'
        right={0}
        top='80px'
        flexDirection='column'
        justifyContent='space-between'
        h='calc(100vh - 80px)'
    >
        <Flex gap={6} flexDirection='column' p='16px 56px 16px 66px'>
            <Stack
                p='8px 16px'
                fontWeight={800}
                color='lime.600'
                spacing='8px'
                flexDirection='row'
                alignItems='center'
            >
                <BookmarkHeart />
                <Text>185</Text>
            </Stack>
            <Stack
                p='8px 16px'
                fontWeight={800}
                color='lime.600'
                spacing='8px'
                flexDirection='row'
                alignItems='center'
            >
                <PeopleFill />
                <Text>589</Text>
            </Stack>
            <Stack
                p='8px 16px'
                fontWeight={800}
                color='lime.600'
                spacing='8px'
                flexDirection='row'
                alignItems='center'
            >
                <EmojiHeartEyes />
                <Text>587</Text>
            </Stack>
        </Flex>
        <Stack
            justifyContent='center'
            alignItems='center'
            bg='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
            width='208px'
            height='208px'
        >
            <Button borderRadius='50px' p='0 12px' boxSize='48px' background='#000'>
                <WriteDown boxSize='24px' />
            </Button>
        </Stack>
    </Flex>
);
