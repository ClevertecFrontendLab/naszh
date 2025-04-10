import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { UserProps } from '~/types/user';

export const UserInfo: FC<UserProps> = ({ firstName, lastName, login, img }) => (
    <Flex alignItems='center' gap='1rem'>
        <Avatar size='md' name={`${firstName} ${lastName}`} src={img} />
        <Box pr={2}>
            <Text fontWeight={500} fontSize='18px'>
                {`${firstName} ${lastName}`}
            </Text>
            <Text fontSize='14px' color='blackAlpha.700'>
                {login}
            </Text>
        </Box>
    </Flex>
);
