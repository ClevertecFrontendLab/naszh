import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import userAva from '../../assets/imgs/user_ava.png';

export const UserInfo = () => (
    <Flex alignItems='center' gap='1rem'>
        <Avatar size='md' name='Catherine Constantinopolska' src={userAva} />
        <Box pr={2}>
            <Text fontWeight={500} fontSize='18px'>
                Екатерина Константинопольская
            </Text>
            <Text fontSize='14px' color='blackAlpha.700'>
                @bake_and_pie
            </Text>
        </Box>
    </Flex>
);
