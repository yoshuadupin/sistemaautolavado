/*
import CarritosContainer from "../containers/Carritos";
import CerramientoContainer from "../containers/Cerramiento";

import InventarioContainer from "../containers/Inventario";
import LavadoresContainer from "../containers/Lavadores";
import SupervisoresContainer from "../containers/Supervisores";
import TalonarioContainer from "../containers/Talonarios";
*/

import ContentSupervisor from '../container/Supervisores';
import ContentLavadores from '../container/Lavadores';
import ContentCerramiento from '../container/Cerramientos';
import ContentTalonarios from '../container/Talonarios';
import ContentInventario from '../container/Inventario';
import ContentCarritos from '../container/Carritos';
import CuentaContainer from '../container/Cuenta';

const routes = [
  
    {
        path: '/supervisores',
        component: ContentSupervisor,
        title:'Supervisores'
    },
    {
        path: '/lavadores',
        component: ContentLavadores,
        title:'Lavadores'

    }, {
        path: '/cerramientos',
        component: ContentCerramiento,
        title:'Cerramiento'
    }, {
        path: '/talonarios',
        component: ContentTalonarios,
        title:'Talonarios'
    },
    {
        path: '/inventario',
        component: ContentInventario,
        title:'Inventario'
    } , {
        path: '/carritos',
        component: ContentCarritos,
        title:'Carritos'
    } ,
    {
        path: '/cuenta',
        component: CuentaContainer,
        title:'Cuenta'
    }    
]

export default routes;