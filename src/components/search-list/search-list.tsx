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

export const SearchList = ({ heading, descr }: { heading: string; descr?: string }) => (
    <Flex m='32px 0 16px' gap='16px' flexDirection='column' alignItems='center'>
        <Heading fontSize='48px' mb={4} textAlign='center'>
            {heading}
            {descr && (
                <Text fontWeight={500} fontSize='16px' color='blackAlpha.600' w='696px' mt='12px'>
                    {descr}
                </Text>
            )}
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
                    _placeholder={{ color: 'lime.800' }}
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
