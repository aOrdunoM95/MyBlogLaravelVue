const Home = ()=> import('./components/Home.vue');

const Show = ()=> import('./components/comment/Show.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        components: {
            Home: Home,
            Show: Show
        }
    },
]
