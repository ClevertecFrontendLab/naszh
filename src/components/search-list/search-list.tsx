import { Button, Flex, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { FilterBtn } from '../icons/filter-btn';

export const SearchList = () => (
    <Flex
        width='1360px'
        flexDirection='column'
        alignItems='center'
        gap='32px'
        m='32px 0'
        h='fit-content'
    >
        <Heading fontSize='48px'>Приятного аппетита!</Heading>
        <Flex>
            <Button
                border='1px solid'
                borderColor='blackAlpha.600'
                borderRadius='6px'
                p='0 12px'
                w='48px'
                h='48px'
            >
                <FilterBtn boxSize='24px' />
            </Button>
            <InputGroup>
                <InputRightElement pointerEvents='none'></InputRightElement>
                <Input placeholder='Название или ингредиент...' />
            </InputGroup>
        </Flex>
    </Flex>
);
