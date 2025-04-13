import { UserProps } from '~/types/user';

import alex from '../assets/imgs/alex.png';
import elena from '../assets/imgs/elena.png';
import kate from '../assets/imgs/user_ava.png';

export const users: UserProps[] = [
    {
        firstName: 'Елена',
        lastName: 'Высоцкая',
        login: '@elenapovar',
        img: elena,
        blog: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        firstName: 'Alex',
        lastName: 'Cook',
        login: '@funtasticooking',
        img: alex,
        blog: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        firstName: 'Екатерина',
        lastName: 'Константинопольская',
        login: '@bake_and_pie',
        img: kate,
        blog: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
