import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { cardsveg } from '~/mocks/cards-veg';
import { tabs } from '~/mocks/tabs';

import { TheJuiciest } from '../the-juiciest';

export const TabsRow = () => (
    <Tabs mb={6}>
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
    </Tabs>
);
