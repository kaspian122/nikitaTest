/**
 *
 * @type {{
    'MAIN',
    'NEWS',
    'ABOUT',
 * }}
 */

const headerMenu = {
    MAIN: 'MAIN',
    NEWS: 'NEWS',
    ABOUT: 'ABOUT'
};

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

const actions = {
    LOGIN: 'LOGIN',
    ERROR_LOGIN: 'ERROR_LOGIN',
    SIGN_OUT: 'SIGN_OUT',
    ADD_DATA: 'ADD_DATA',
};

const url = {
    users: 'http://localhost:8000/users/',
    data: 'http://localhost:8000/data/'
};

const MainConstants = {
    menu,
    titles,
    actions,
    url,
};

export default MainConstants;