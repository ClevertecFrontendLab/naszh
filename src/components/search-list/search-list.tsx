import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Text,
} from '@chakra-ui/react';

import { FilterBtn } from '../icons/filter-btn';
import { SearchIcon } from '../icons/search-icon';
import { SwitchIcon } from '../icons/switch-icon';

export const SearchList = () => (
    <Flex m='32px 0 16px' gap='16px' flexDirection='column'>
        <Heading fontSize='48px' mb={4}>
            Приятного аппетита!
        </Heading>
        <Flex w='518px' gap='12px'>
            <Button
                border='1px solid'
                borderColor='blackAlpha.600'
                borderRadius='6px'
                p='0 12px'
                w='48px'
                h='48px'
                flexShrink={0}
            >
                <FilterBtn boxSize='24px' />
            </Button>
            <InputGroup>
                <InputRightElement
                    pointerEvents='none'
                    h='48px'
                    children={<SearchIcon boxSize='18px' />}
                />
                <Input
                    placeholder='Название или ингредиент...'
                    h='48px'
                    borderColor='blackAlpha.600'
                />
            </InputGroup>
        </Flex>
        <Flex w='518px' gap='16px'>
            <Box display='flex' gap='12px' alignItems='center' flexShrink={0} p='6px 0px 6px 8px'>
                <Text fontWeight={500}>Исключить мои аллергены</Text>
                <SwitchIcon boxSize='34px' />
            </Box>
            <Select
                icon={<ChevronDownIcon />}
                variant='outline'
                placeholder='Выберите из списка'
                alignSelf='center'
            />
        </Flex>
    </Flex>
);
