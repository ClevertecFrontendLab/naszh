import { Avatar, Box, Card, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { UserProps } from '~/types/user';

export const CardBlog: FC<{ users: UserProps[] }> = ({ users }) =>
    users.map((user) => (
        <Card>
            <Flex p='24px 24px 16px 24px' gap={3}>
                <Avatar src={user.img} boxSize={12} />
                <Box>
                    <Text fontSize='18px' fontWeight={500}>
                        {user.firstName} {user.lastName}
                    </Text>
                    <Text fontSize='14px' color='blackAlpha.700'>
                        {user.login}
                    </Text>
                </Box>
            </Flex>
            <Text fontSize='14px' p='12px 24px 20px 24px'>
                {user.blog}
            </Text>
        </Card>
    ));
