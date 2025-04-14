import { BookmarkHeart } from '~/components/icons/bookmark-heart.tsx';
import { ChildrensIcon } from '~/components/icons/childrens-icon';
import { EmojiHeartEyes } from '~/components/icons/emoji-heart-eyes.tsx';
import { GrillIcon } from '~/components/icons/grill-icon';
import { NationalIcon } from '~/components/icons/national-icon.tsx';
import { SecDishesIcon } from '~/components/icons/sec-dishes-icon.tsx';

import garlicpotatoes from '../assets/imgs/garlic-potatoes.png';
import lasagna from '../assets/imgs/lasagna.png';
import meatballs from '../assets/imgs/meatballs.png';
import potato from '../assets/imgs/potato.png';
import potatorolls from '../assets/imgs/potato-rolls.png';
import puri from '../assets/imgs/puri.png';
import tomyum from '../assets/imgs/tom-yum.png';
import { CardProps } from '../types/card';

export const cardsveg: CardProps[] = [
    {
        image: potato,
        alt: 'potato',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        desciption:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        icon: NationalIcon,
        tag: 'Национальные',
        bookmarks: [
            { type: BookmarkHeart, count: 85 },
            { type: EmojiHeartEyes, count: 152 },
        ],
    },
    {
        image: potatorolls,
        alt: 'potato-rolls',
        title: 'Картофельные рулетики с грибами',
        desciption:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        icon: ChildrensIcon,
        tag: 'Детские блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 85 },
            { type: EmojiHeartEyes, count: 152 },
        ],
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
    {
        image: lasagna,
        alt: 'lasagna',
        title: 'Овощная лазанья из лаваша',
        desciption:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        icon: GrillIcon,
        tag: 'Блюда на гриле',
        bookmarks: [
            { type: BookmarkHeart, count: 85 },
            { type: EmojiHeartEyes, count: 152 },
        ],
    },
    {
        image: meatballs,
        alt: 'meatballs',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        desciption:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        icon: SecDishesIcon,
        tag: 'Вторые блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 85 },
            { type: EmojiHeartEyes, count: 152 },
        ],
    },
    {
        image: meatballs,
        alt: 'meatballs',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        desciption:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        icon: SecDishesIcon,
        tag: 'Вторые блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 85 },
            { type: EmojiHeartEyes, count: 152 },
        ],
    },
    {
        image: garlicpotatoes,
        alt: 'garlic-potatoes',
        title: 'Чесночная картошка',
        desciption:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        icon: NationalIcon,
        tag: 'Национальные',
        bookmarks: [
            { type: BookmarkHeart, count: 124 },
            { type: EmojiHeartEyes, count: 324 },
        ],
    },
    {
        image: puri,
        alt: 'puri',
        title: 'Пури',
        desciption:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        icon: NationalIcon,
        tag: 'Национальные',
        bookmarks: [
            { type: BookmarkHeart, count: 124 },
            { type: EmojiHeartEyes, count: 324 },
        ],
    },
];
