import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';

import { cardsrecipe } from '~/mocks/cards';

import { CardRecipe } from '../card-recipe';
import { ArrowLeft } from '../icons/arrow-left';
import { ArrowRight } from '../icons/arrow-right';

export const NewRecipes = () => (
    <Flex flexDirection='column' gap={6} w='100%'>
        <Flex justifyContent='flex-start'>
            <Heading size='2xl' fontWeight={500}>
                Новые рецепты
            </Heading>
        </Flex>
        <Flex gap={6} pos='relative'>
            <CardRecipe cards={cardsrecipe} />
            <IconButton
                icon={<ArrowLeft />}
                // onClick={prevSlide}
                position='absolute'
                top='42%'
                left='-8px'
                transform='translateY(-50%)'
                aria-label='Previous'
                bg='black'
            />
            <IconButton
                icon={
                    <Box color='lime.50'>
                        <ArrowRight />
                    </Box>
                }
                // onClick={nextSlide}
                position='absolute'
                top='42%'
                right='-8px'
                transform='translateY(-50%)'
                aria-label='Next'
                bg='black'
            />
        </Flex>
    </Flex>
);
