import MainUtils from "../utils/mainUtils";

/**
 *
 * @type {{
    'MAIN',
    'NEWS',
 * }}
 */

const headerMenu = MainUtils.KeyMirror([
    'MAIN',
    'NEWS',
]);

const titles = {
    [headerMenu.MAIN]: 'Главная',
    [headerMenu.NEWS]: 'Новости'
};

const menu = [
    {
        id: headerMenu.MAIN,
        link: '/'
    },
    {
        id: headerMenu.NEWS,
        link: '/news'
    },
];

const MainConstants = {
    menu,
    titles
};

export default MainConstants;