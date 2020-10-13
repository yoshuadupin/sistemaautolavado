import Login from "../container/Login";

const routes = [

    
    {
        path: '/auth/register',
        component: RegisterComponent,
        title:'Register'
    },
    {
        path: '/auth/login',
        component: Login,
        title:'Login'

    }, {
        path: '/',
        component: Login,
        title:'Contacts'
    },
     {
        path: '/carritos',
        component: CreateContactComponent,
        title:'Create'
    }, {
        path: '/cerramientos',
        component: CreateContactComponent,
        title:'Create'
    }, {
        path: '/inventario',
        component: CreateContactComponent,
        title:'Create'
    }, {
        path: '/lavadores',
        component: CreateContactComponent,
        title:'Create'
    },{
        path: '/talonario',
        component: CreateContactComponent,
        title:'Create'
    }
]

export default routes;