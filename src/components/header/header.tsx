import { Flex, Spacer } from '@chakra-ui/react';

import { user } from '../../mocks/user.ts';
import { Breadcrumbs } from '../breadcrumbs';
import { Logo } from '../logo';
import { UserInfo } from '../user-info';

export const Header = () => (
    <Flex py={6} pl={4} pr={20} h='80px' alignItems='center' bg='#ffffd3'>
        <Logo />
        <Breadcrumbs />
        <Spacer />
        <UserInfo {...user} />
    </Flex>
);
