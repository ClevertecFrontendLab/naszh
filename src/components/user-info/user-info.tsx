import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import userAva from '../../assets/imgs/user_ava.png';

export const UserInfo = () => (
    <Flex alignItems='center' gap='1rem'>
        <Avatar size='md' name='Catherine Constantinopolska' src={userAva} />
        <Box>
            <Text>Екатерина Константинопольская</Text>
            <Text>@bake_and_pie</Text>
        </Box>
    </Flex>
);
