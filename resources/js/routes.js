const Home = ()=> import('./components/Home.vue');

const Show = ()=> import('./components/comment/Show.vue');
const Create = ()=> import('./components/comment/Create.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        components: {
            Home: Home,
            Show: Show,
            Create: Create
        }
    },
]
