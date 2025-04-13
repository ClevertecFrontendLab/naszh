import { BookmarkHeart } from '~/components/icons/bookmark-heart.tsx';
import { EmojiHeartEyes } from '~/components/icons/emoji-heart-eyes.tsx';
import { NationalIcon } from '~/components/icons/national-icon.tsx';
import { SecDishesIcon } from '~/components/icons/sec-dishes-icon.tsx';

import alex from '../assets/imgs/alex.png';
import cabbage from '../assets/imgs/cabbage-cutlets.png';
import dumplings from '../assets/imgs/dumplings.png';
import elena from '../assets/imgs/elena.png';
import ham from '../assets/imgs/ham.png';
import noodles from '../assets/imgs/noodles.png';
import pancakes from '../assets/imgs/pancakes.png';
import salad from '../assets/imgs/salad.png';
import solyanka from '../assets/imgs/solyanka.png';
import tomyum from '../assets/imgs/tom-yum.png';
import { DessertsIcon } from '../components/icons/desserts-icon.tsx';
import { FirstDishesIcon } from '../components/icons/first-dishes-icon.tsx';
import { SaladsIcon } from '../components/icons/salads-icon.tsx';
import { VeganIcon } from '../components/icons/vegan-icon.tsx';
import { CardProps } from '../types/card';

export const cardsrecipe: CardProps[] = [
    {
        image: solyanka,
        alt: 'solyanka',
        title: 'Солянка с грибами',
        desciption:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icon: FirstDishesIcon,
        tag: 'Первые блюда',
        bookmarks: [{ type: BookmarkHeart, count: 1 }],
    },
    {
        image: cabbage,
        alt: 'cabbage-cutlets',
        title: 'Капустные котлеты',
        desciption:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        icon: VeganIcon,
        tag: 'Веганские блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 2 },
            { type: EmojiHeartEyes, count: 1 },
        ],
    },
    {
        image: pancakes,
        alt: 'pancakes',
        title: 'Оладьи на кефире "Пышные"',
        desciption:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        icon: DessertsIcon,
        tag: 'Десерты, выпечка',
        bookmarks: [{ type: EmojiHeartEyes, count: 1 }],
    },
    {
        image: salad,
        alt: 'salad',
        title: 'Салат "Здоровье"',
        desciption:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        icon: SaladsIcon,
        tag: 'Салаты',
        bookmarks: [],
    },
];

export const cardsjuiciest: CardProps[] = [
    {
        image: dumplings,
        alt: 'dumplings',
        title: 'Кнели со спагетти',
        desciption:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icon: SecDishesIcon,
        tag: 'Вторые блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 85 },
            { type: EmojiHeartEyes, count: 152 },
        ],
    },
    {
        image: ham,
        alt: 'ham',
        title: 'Пряная ветчина по итальянски',
        desciption:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icon: SecDishesIcon,
        tag: 'Вторые блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 159 },
            { type: EmojiHeartEyes, count: 257 },
        ],
        user: { firstName: 'Елена', lastName: 'Высоцкая', img: elena },
    },
    {
        image: noodles,
        alt: 'noodles',
        title: 'Лапша с курицей и шафраном',
        desciption:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icon: SecDishesIcon,
        tag: 'Вторые блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 258 },
            { type: EmojiHeartEyes, count: 342 },
        ],
        user: { firstName: 'Alex', lastName: 'Cook', img: alex },
    },
    {
        image: tomyum,
        alt: 'tomyum',
        title: 'Том-ям с капустой кимчи',
        desciption:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icon: NationalIcon,
        tag: 'Национальные',
        bookmarks: [
            { type: BookmarkHeart, count: 124 },
            { type: EmojiHeartEyes, count: 324 },
        ],
    },
];
