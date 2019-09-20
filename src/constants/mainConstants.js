import MainUtils from "../utils/mainUtils";

/**
 *
 * @type {{
    'MAIN',
    'NEWS',
    'ABOUT',
 * }}
 */

const headerMenu = MainUtils.KeyMirror([
    'MAIN',
    'NEWS',
    'ABOUT',
]);

const titles = {
    [headerMenu.MAIN]: 'Home',
    [headerMenu.NEWS]: 'News',
    [headerMenu.ABOUT]: 'About'
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
    {
        id: headerMenu.ABOUT,
        link: '/about'
    }
];

const MainConstants = {
    menu,
    titles
};

export default MainConstants;