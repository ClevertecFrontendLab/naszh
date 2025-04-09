import { ComponentWithAs, IconProps } from '@chakra-ui/icons';

import { ChildrensIcon } from '../nav-icons/childrens-icon';
import { DessertsIcon } from '../nav-icons/desserts-icon';
import { DrinksIcon } from '../nav-icons/drinks-icon';
import { FirstDishesIcon } from '../nav-icons/first-dishes-icon';
import { GrillIcon } from '../nav-icons/grill-icon';
import { HealthyFoodIcon } from '../nav-icons/healthy-food-icon';
import { HomemadeIcon } from '../nav-icons/homemade-icon';
import { NationalIcon } from '../nav-icons/national-icon';
import { SaladsIcon } from '../nav-icons/salads-icon';
import { SaucesIcon } from '../nav-icons/sauces-icon';
import { SecDishesIcon } from '../nav-icons/sec-dishes-icon';
import { SnacksIcon } from '../nav-icons/snacks-icon';
import { VeganIcon } from '../nav-icons/vegan-icon';

export type navItemsType = {
    category: string;
    path: string;
    icon: ComponentWithAs<'svg', IconProps>;
    subItems: { name: string; path: string }[];
};

export const navItems: navItemsType[] = [
    {
        category: 'Салаты',
        path: '/salads',
        icon: SaladsIcon,
        subItems: [
            { name: 'Мясные салаты', path: 'meat-salads' },
            { name: 'Рыбные салаты', path: 'fish-salads' },
            { name: 'Овощные салаты', path: 'vegetable-salads' },
            { name: 'Теплые салаты', path: 'warm-salads' },
        ],
    },
    {
        category: 'Закуски',
        path: '/snacks',
        icon: SnacksIcon,
        subItems: [
            { name: 'Мясные закуски', path: 'meat-snacks' },
            { name: 'Рыбные закуски', path: 'fish-snacks' },
            { name: 'Овощные закуски', path: 'vegetable-snacks' },
            { name: 'Теплые закуски', path: 'warm-snacks' },
            { name: 'Бутерброды', path: 'sandwiches' },
            { name: 'Фастфуд', path: 'fast-food' },
        ],
    },
    {
        category: 'Первые блюда',
        path: '/first-dishes',
        icon: FirstDishesIcon,
        subItems: [
            { name: 'Мясные супы', path: 'meat-soups' },
            { name: 'Овощные супы', path: 'vegetable-soups' },
            { name: 'Бульоны', path: 'broths' },
            { name: 'Холодные супы', path: 'cold-soups' },
            { name: 'Диетические супы', path: 'diet-soups' },
        ],
    },
    {
        category: 'Вторые блюда',
        path: '/second-dishes',
        icon: SecDishesIcon,
        subItems: [
            { name: 'Мясные', path: 'meat' },
            { name: 'Рыбные', path: 'fish' },
            { name: 'Овощные', path: 'vegetable' },
            { name: 'Из птицы', path: 'poultry' },
            { name: 'Из грибов', path: 'mushrooms' },
            { name: 'Из субпродуктов', path: 'by-products' },
            { name: 'На пару', path: 'steamed' },
            { name: 'Пельмени, вареники', path: 'dumplings' },
            { name: 'Мучные гарниры', path: 'flour-side' },
            { name: 'Овощные гарниры', path: 'vegetable-side' },
            { name: 'Пицца', path: 'pizza' },
            { name: 'Суши', path: 'sushi' },
        ],
    },
    {
        category: 'Десерты, выпечка',
        path: '/desserts-pastries',
        icon: DessertsIcon,
        subItems: [
            { name: 'Блины и оладьи', path: 'pancakes' },
            { name: 'Пироги и пончики', path: 'pies' },
            { name: 'Торты', path: 'cakes' },
            { name: 'Рулеты', path: 'rolls' },
            { name: 'Кексы и маффины', path: 'muffins' },
            { name: 'Сырники и ватрушки', path: 'cheesecakes' },
            { name: 'Из слоеного теста', path: 'puff-pastry' },
            { name: 'Из заварного теста', path: 'custard-dough' },
            { name: 'Из дрожжевого теста', path: 'yeast-dough' },
            { name: 'Булочка и сдоба', path: 'buns' },
            { name: 'Хлеб', path: 'bread' },
            { name: 'Тесто на пиццу', path: 'pizza-dough' },
            { name: 'Кремы', path: 'creams' },
        ],
    },
    {
        category: 'Блюда на гриле',
        path: '/grill',
        icon: GrillIcon,
        subItems: [
            { name: 'Говядина', path: 'grilled-beef' },
            { name: 'Свинина', path: 'grilled-pork' },
            { name: 'Птица', path: 'grilled-poultry' },
            { name: 'Рыба', path: 'grilled-fish' },
            { name: 'Грибы', path: 'grilled-mushrooms' },
            { name: 'Овощи', path: 'grilled-vegetables' },
        ],
    },
    {
        category: 'Веганская кухня',
        path: '/vegan',
        icon: VeganIcon,
        subItems: [
            { name: 'Закуски', path: 'snacks' },
            { name: 'Первые блюда', path: 'first-dishes' },
            { name: 'Вторые блюда', path: 'second-dishes' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Десерты', path: 'desserts' },
            { name: 'Выпечка', path: 'pastries' },
            { name: 'Сыроедческие блюда', path: 'raw-food' },
            { name: 'Напитки', path: 'drinks' },
        ],
    },
    {
        category: 'Детские блюда',
        path: '/childrens',
        icon: ChildrensIcon,
        subItems: [
            { name: 'Первые блюда', path: 'first-dishes' },
            { name: 'Вторые блюда', path: 'second-dishes' },
            { name: 'Гарниры', path: 'side-dishes' },
            { name: 'Выпечка', path: 'pastries' },
            { name: 'Без глютена', path: 'gluten-free' },
            { name: 'Без сахара', path: 'sugar-free' },
            { name: 'Без аллергенов', path: 'allergen-free' },
            { name: 'Блюда для прикорма', path: 'complementary' },
        ],
    },
    {
        category: 'Лечебное питание',
        path: '/healthy-food',
        icon: HealthyFoodIcon,
        subItems: [
            { name: 'Детская диета', path: 'childrens-diet' },
            { name: 'Диета №1', path: 'diet-1' },
            { name: 'Диета №2', path: 'diet-2' },
            { name: 'Диета №3', path: 'diet-3' },
            { name: 'Диета №5', path: 'diet-5' },
            { name: 'Диета №6', path: 'diet-6' },
            { name: 'Диета №7', path: 'diet-7' },
            { name: 'Диета №8', path: 'diet-8' },
            { name: 'Диета №9', path: 'diet-9' },
            { name: 'Диета №10', path: 'diet-10' },
            { name: 'Диета №11', path: 'diet-11' },
            { name: 'Диета №12', path: 'diet-12' },
            { name: 'Диета №13', path: 'diet-13' },
            { name: 'Диета №14', path: 'diet-14' },
            { name: 'Без глютена', path: 'gluten-free' },
            { name: 'Без аллергенов', path: 'allergen-free' },
        ],
    },
    {
        category: 'Национальные',
        path: '/national',
        icon: NationalIcon,
        subItems: [
            { name: 'Американская кухня', path: 'american' },
            { name: 'Армянская кухня', path: 'armenian' },
            { name: 'Греческая кухня', path: 'greek' },
            { name: 'Грузинская кухня', path: 'georgian' },
            { name: 'Итальянская кухня', path: 'italian' },
            { name: 'Испанская кухня', path: 'spanish' },
            { name: 'Китайская кухня', path: 'chinese' },
            { name: 'Мексиканская кухня', path: 'mexican' },
            { name: 'Паназиатская кухня', path: 'pan-asian' },
            { name: 'Русская кухня', path: 'russian' },
            { name: 'Турецкая кухня', path: 'turkish' },
            { name: 'Французская кухня', path: 'french' },
            { name: 'Шведская кухня', path: 'swedish' },
            { name: 'Японская кухня', path: 'japanese' },
            { name: 'Другая кухня', path: 'other-cuisine' },
        ],
    },
    {
        category: 'Соусы',
        path: '/sauces',
        icon: SaucesIcon,
        subItems: [
            { name: 'Соусы мясные', path: 'meat-sauces' },
            { name: 'Соусы сырные', path: 'cheese-sauces' },
            { name: 'Маринады', path: 'marinades' },
        ],
    },
    {
        category: 'Напитки',
        path: '/drinks',
        icon: DrinksIcon,
        subItems: [
            { name: 'Соки и фреши', path: 'juices' },
            { name: 'Смузи', path: 'smoothie' },
            { name: 'Компоты', path: 'compotes' },
            { name: 'Кисели', path: 'jelly' },
            { name: 'Кофе', path: 'coffee' },
            { name: 'Лечебный чай', path: 'medicinal-tea' },
            { name: 'Квас', path: 'kvass' },
            { name: 'Коктейли', path: 'cocktails' },
            { name: 'Алкогольные', path: 'alcohol' },
        ],
    },
    {
        category: 'Заготовки',
        path: '/homemade',
        icon: HomemadeIcon,
        subItems: [
            { name: 'Мясные заготовки', path: 'meat-homemade' },
            { name: 'Рыбные заготовки', path: 'fish-homemade' },
            { name: 'Из огурцов', path: 'cucumbers-homemade' },
            { name: 'Из томатов', path: 'tomatoes-homemade' },
            { name: 'Из грибов', path: 'mushrooms-homemade' },
            { name: 'Овощные заготовки', path: 'vegetables-homemade' },
            { name: 'Салаты, икра', path: 'salads-homemade' },
            { name: 'Из фруктов и ягод', path: 'fruits-homemade' },
        ],
    },
];
