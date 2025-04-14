import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import { users } from '~/mocks/users';

import { CardBlog } from '../card-blog';
import { ArrowRight } from '../icons/arrow-right';

export const Blogs = () => (
    <Flex flexDirection='column' gap={6} w='100%' p={6} background='lime.300' borderRadius='16px'>
        <Flex justifyContent='space-between'>
            <Heading size='xl' fontWeight={400}>
                Кулинарные блоги
            </Heading>
            <Button
                rightIcon={
                    <Box color='#000'>
                        <ArrowRight boxSize={4} />
                    </Box>
                }
                variant='link'
                fontWeight={600}
                fontSize='18px'
                color='#000'
                h='100%'
                px={6}
                py={2.5}
            >
                Все авторы
            </Button>
        </Flex>
        <SimpleGrid columns={3} spacing={4}>
            <CardBlog users={users} />
        </SimpleGrid>
    </Flex>
);
