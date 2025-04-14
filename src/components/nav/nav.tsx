import { Accordion, Button, Flex, Stack, Text } from '@chakra-ui/react';

import { ExitIcon } from '../icons/exit-icon';
import { NavItem } from './nav-item';
import { navItems } from './nav-items';

export const Nav = () => (
    <Flex
        direction='column'
        justifyContent='space-between'
        h='calc(100vh - 80px)'
        w='256px'
        borderRight='1px solid'
        borderColor='blackAlpha.200'
        pos='fixed'
        left={0}
        top='80px'
    >
        <Accordion
            allowToggle
            pt={2.5}
            pl={2.5}
            mt={6}
            overflowY='auto'
            css={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0, 0, 0, 0.16)',
                    borderRadius: '8px',
                    maxHeight: '30%',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: '8px',
                },
            }}
        >
            {navItems.map((item, i) => (
                <NavItem {...item} key={i} />
            ))}
        </Accordion>
        <Stack p={6} gap={4}>
            <Text color='blackAlpha.400' fontSize='xs' lineHeight={4} fontWeight={500}>
                Версия программы 03.25
            </Text>
            <Text color='blackAlpha.700' fontSize='xs' lineHeight={4}>
                Все права защищены, ученический файл, <br /> ©Клевер Технолоджи, 2025
            </Text>
            <Button
                leftIcon={<ExitIcon />}
                variant='link'
                alignSelf='flex-start'
                fontSize='12px'
                fontWeight={600}
                color='000'
            >
                Выйти
            </Button>
        </Stack>
    </Flex>
);
