import { Accordion } from '@chakra-ui/react';

import { NavItem } from './nav-item';
import { navItems } from './nav-items';

export const Nav = () => (
    // <Stack pt={6} justifyContent={'space-between'} h={'100%'} className={styles.container}>
    <Accordion allowToggle w='256px' pt={2.5} pl={2.5} pr={4} mt={6}>
        {navItems.map((item, i) => (
            <NavItem {...item} key={i} />
        ))}
    </Accordion>
    // <Stack p={6}>
    //     <Text color='blackAlpha.400' fontSize='xs' lineHeight={4} fontWeight={500}>
    //         Версия программы 03.25
    //     </Text>
    //     <Text color='blackAlpha.700' fontSize='xs' lineHeight={4}>
    //         Все права защищены, ученический файл, <br /> ©Клевер Технолоджи, 2025
    //     </Text>
    // </Stack>
    // </Stack>
);
