import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';

import { navItems } from './nav-items';

export const Nav = () => (
    <Accordion defaultIndex={[0]} allowMultiple>
        {navItems.map((item) => (
            <AccordionItem key={item.category}>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        {item.category}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    {item.subItems.length > 0 ? (
                        item.subItems.map((subItem) => (
                            <Box as='span' key={subItem.path} pl={5}>
                                {/* <Link to={`${item.path}/${subItem.path}`}>{subItem.name}</Link> */}
                                <p>
                                    {' '}
                                    {`${item.path}/${subItem.path}`}
                                    {subItem.name}
                                </p>
                            </Box>
                        ))
                    ) : (
                        <Box pl={5}>—</Box> // Если подкатегорий нет
                    )}
                </AccordionPanel>
            </AccordionItem>
        ))}
    </Accordion>
);
