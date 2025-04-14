import { Box, Flex } from '@chakra-ui/react';

import { RelevantKitchen } from '../relevant-kitchen';
import { SearchList } from '../search-list';
import { TabsRow } from '../tabs-row';

export const PageVegan = () => (
    <Flex
        width='1360px'
        flexDirection='column'
        alignItems='center'
        // gap={10}
        h='fit-content'
        ml={6}
        mt='80px'
    >
        <SearchList
            heading='Веганская кухня'
            descr='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
        <TabsRow />
        <Box h={10} />
        <RelevantKitchen />
    </Flex>
);
