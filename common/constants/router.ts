interface IRouter {
    link: string;
    header: any;
}

type TRouters = 'home' | '404';

const config: Record<TRouters, IRouter> = {
    home: {
        link: '/',
        header: {
            title: 'Pham Vinh Nhan',
            canonical: '/',
            description: 'My Personal Portfolio',
            isIndexPage: true,
        },
    },
    '404': {
        link: '/404',
        header: {
            title: 'Pham Vinh Nhan',
            canonical: '/404',
            description: 'Page Not Found',
        },
    },
};

export default config;
