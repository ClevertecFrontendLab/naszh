import { AccordionButton, AccordionItem, AccordionPanel, Box, Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { ArrowClose } from '../icons/arrow-close';
import { navItemsType } from './nav-items';
// import { Link } from 'react-router';

export const NavItem: FC<navItemsType> = ({ category, /*path,*/ icon, subItems }) => (
    <AccordionItem key={category} border='none'>
        <AccordionButton py={3} px={2} gap={3}>
            <Icon as={icon} boxSize='24px' />
            <Box as='span' flex='1' textAlign='left' fontWeight={500}>
                {category}
            </Box>
            <Icon as={ArrowClose} />
        </AccordionButton>
        <AccordionPanel px={0} py={0}>
            {subItems?.map((subItem) => (
                <Box as='div' key={subItem.path} py={1.5} pr={2} pl='52px'>
                    {/* <Link to={`${path}/${subItem.path}`}>{subItem.name}</Link> */}
                    <Text fontWeight={500}>{subItem.name}</Text>
                </Box>
            ))}
        </AccordionPanel>
    </AccordionItem>
);
