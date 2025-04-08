import { Flex, Spacer } from '@chakra-ui/react';

import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';
import { Logo } from '../logo';
import { UserInfo } from '../user-info/user-info';

export const Header = () => (
    <Flex py={6} px={4} mr={{ base: 0, md: 14 }} h='80px' alignItems='center'>
        <Logo />
        <Breadcrumbs />
        <Spacer />
        <UserInfo />
    </Flex>
);
