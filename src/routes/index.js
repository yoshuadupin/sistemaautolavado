import CarritosContainer from "../containers/Carritos";
import CerramientoContainer from "../containers/Cerramiento";
import CuentaContainer from "../containers/Cuenta";
import InventarioContainer from "../containers/Inventario";
import LavadoresContainer from "../containers/Lavadores";
import SupervisoresContainer from "../containers/Supervisores";
import TalonarioContainer from "../containers/Talonarios";


const routes = [
  
    {
        path: '/supervisores',
        component: SupervisoresContainer,
        title:'Supervisores'
    },
    {
        path: '/lavadores',
        component: LavadoresContainer,
        title:'Lavadores'

    }, {
        path: '/cerramiento',
        component: CerramientoContainer,
        title:'Cerramiento'
    }, {
        path: '/talonarios',
        component: TalonarioContainer,
        title:'Talonarios'
    },
    {
        path: '/inventario',
        component: InventarioContainer,
        title:'Inventario'
    } , {
        path: '/carritos',
        component: CarritosContainer,
        title:'Carritos'
    } ,
    {
        path: '/cuenta',
        component: CuentaContainer,
        title:'Cuenta'
    }    
]

export default routes;