import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { cardsveg } from '~/mocks/cards';
import { tabs } from '~/mocks/tabs';

import { TheJuiciest } from '../the-juiciest';

export const TabsRow = () => (
    <Tabs>
        <TabList justifyContent='center' w='fit-content' m='0 auto 24px'>
            {tabs.map((tab) => (
                <Tab
                    fontWeight={500}
                    color='lime.800'
                    _selected={{
                        color: 'lime.600',
                        borderBottom: '2px solid',
                        borderColor: 'lime.600',
                    }}
                >
                    {tab}
                </Tab>
            ))}
        </TabList>
        <TabPanels>
            <TabPanel p={0}>
                <TheJuiciest title='' cards={cardsveg} />
            </TabPanel>
            <TabPanel p={0}>
                <TheJuiciest title='' cards={cardsveg} />
            </TabPanel>
            <TabPanel p={0}>
                <TheJuiciest title='' cards={cardsveg} />
            </TabPanel>
            <TabPanel p={0}>
                <TheJuiciest title='' cards={cardsveg} />
            </TabPanel>
            <TabPanel p={0}>
                <TheJuiciest title='' cards={cardsveg} />
            </TabPanel>
            <TabPanel p={0}>
                <TheJuiciest title='' cards={cardsveg} />
            </TabPanel>
        </TabPanels>
        <Box display='flex' justifyContent='center' mt='16px'>
            <Button
                variant='solid'
                fontWeight={600}
                fontSize='16px'
                lineHeight='150%'
                color='#000'
                h='100%'
                px={4}
                py={2}
                background='lime.400'
            >
                Загрузить еще
            </Button>
        </Box>
    </Tabs>
);
