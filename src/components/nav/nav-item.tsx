import {
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Icon,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Link, useLocation } from 'react-router';

import { ArrowClose } from '../icons/arrow-close';
import { ArrowOpen } from '../icons/arrow-open';
import { navItemsType } from './nav-items';

export const NavItem: FC<navItemsType> = ({ category, path, icon, subItems, isOpen, onToggle }) => {
    const location = useLocation();

    return (
        <AccordionItem key={category} border='none'>
            <AccordionButton
                as={Link}
                to={path}
                py={3}
                px={2}
                gap={3}
                w='230px'
                onClick={onToggle}
                _hover={{ backgroundColor: 'lime.50' }}
                backgroundColor={isOpen ? 'lime.100' : 'none'}
            >
                <Icon as={icon} boxSize='24px' />
                <Box as='span' flex='1' textAlign='left' fontWeight={500}>
                    {category}
                </Box>
                {isOpen ? <Icon as={ArrowOpen} /> : <Icon as={ArrowClose} />}
            </AccordionButton>
            {isOpen && (
                <AccordionPanel p={0}>
                    {subItems?.map((subItem) => {
                        const isActive = location.pathname === `${path}/${subItem.path}`;

                        return (
                            <Flex
                                as={Link}
                                to={`${path}/${subItem.path}`}
                                key={subItem.path}
                                py={1.5}
                                pr={2}
                                pl={8}
                                gap='11px'
                                w='230px'
                                _hover={{ backgroundColor: 'lime.50' }}
                            >
                                <Box w='8px'>
                                    <Text
                                        w={isActive ? '8px' : '1px'}
                                        h='24px'
                                        background='lime.300'
                                        position='relative'
                                        left={isActive ? '-7px' : '0'}
                                    />
                                </Box>
                                <Text fontWeight={isActive ? 700 : 500}>{subItem.name}</Text>
                            </Flex>
                        );
                    })}
                </AccordionPanel>
            )}
        </AccordionItem>
    );
};
