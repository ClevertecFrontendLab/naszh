import { BookmarkHeart } from '~/components/icons/bookmark-heart.tsx';
import { EmojiHeartEyes } from '~/components/icons/emoji-heart-eyes.tsx';

import cabbage from '../assets/imgs/cabbage-cutlets.png';
import pancakes from '../assets/imgs/pancakes.png';
import salad from '../assets/imgs/salad.png';
import solyanka from '../assets/imgs/solyanka.png';
import { DessertsIcon } from '../components/icons/desserts-icon.tsx';
import { FirstDishesIcon } from '../components/icons/first-dishes-icon.tsx';
import { SaladsIcon } from '../components/icons/salads-icon.tsx';
import { VeganIcon } from '../components/icons/vegan-icon.tsx';
import { CardProps } from '../types/card';

export const cards: CardProps[] = [
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
