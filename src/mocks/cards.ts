import { BookmarkHeart } from '~/components/icons/bookmark-heart.tsx';
import { ChildrensIcon } from '~/components/icons/childrens-icon';
import { EmojiHeartEyes } from '~/components/icons/emoji-heart-eyes.tsx';
import { GrillIcon } from '~/components/icons/grill-icon';
import { NationalIcon } from '~/components/icons/national-icon.tsx';
import { SecDishesIcon } from '~/components/icons/sec-dishes-icon.tsx';

import alex from '../assets/imgs/alex.png';
import cabbage from '../assets/imgs/cabbage-cutlets.png';
import dumplings from '../assets/imgs/dumplings.png';
import elena from '../assets/imgs/elena.png';
import garlicpotatoes from '../assets/imgs/garlic-potatoes.png';
import ham from '../assets/imgs/ham.png';
import lasagna from '../assets/imgs/lasagna.png';
import meatballs from '../assets/imgs/meatballs.png';
import noodles from '../assets/imgs/noodles.png';
import pancakes from '../assets/imgs/pancakes.png';
import potato from '../assets/imgs/potato.png';
import potatorolls from '../assets/imgs/potato-rolls.png';
import puri from '../assets/imgs/puri.png';
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

export const cardssweet: CardProps[] = [
    {
        image: solyanka,
        alt: 'solyanka',
        title: 'Бананово-молочное желе',
        desciption:
            'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
        icon: ChildrensIcon,
        tag: 'Детские блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 1 },
            { type: EmojiHeartEyes, count: 1 },
        ],
    },
    {
        image: solyanka,
        alt: 'solyanka',
        title: 'Нежный сливочно-сырный крем для кексов',
        desciption:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        icon: ChildrensIcon,
        tag: 'Детские блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 2 },
            { type: EmojiHeartEyes, count: 1 },
        ],
    },
    {
        image: solyanka,
        alt: 'solyanka',
        title: 'Домашние сырные палочки',
        desciption:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        icon: ChildrensIcon,
        tag: 'Детские блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 2 },
            { type: EmojiHeartEyes, count: 1 },
        ],
    },
    {
        image: solyanka,
        alt: 'solyanka',
        title: 'Панкейки',
        desciption:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        icon: ChildrensIcon,
        tag: 'Детские блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 2 },
            { type: EmojiHeartEyes, count: 1 },
        ],
    },
    {
        image: solyanka,
        alt: 'solyanka',
        title: 'Воздушное банановое печенье на сковороде',
        desciption:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        icon: ChildrensIcon,
        tag: 'Детские блюда',
        bookmarks: [
            { type: BookmarkHeart, count: 2 },
            { type: EmojiHeartEyes, count: 1 },
        ],
    },
];
