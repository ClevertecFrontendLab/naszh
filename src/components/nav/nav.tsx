import '../../styles/custom-scroll.css';

import { Accordion, Box, Button, Flex, Stack, Text } from '@chakra-ui/react';

import { ExitIcon } from '../nav-icons/exit';
import { NavItem } from './nav-item';
import { navItems } from './nav-items';

export const Nav = () => (
    <Flex direction='column' justifyContent='space-between' h='calc(100vh - 80px)' w='256px'>
        <Box className='custom-scroll'>
            <Accordion allowToggle pt={2.5} pl={2.5} pr={4} mt={6}>
                {navItems.map((item, i) => (
                    <NavItem {...item} key={i} />
                ))}
            </Accordion>
        </Box>
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
