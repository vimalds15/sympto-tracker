
import {HomeScreen,DetailScreen} from "../screens";

export const routes = [
    {
        path:'/',
        element:<HomeScreen />
    },
    {
        path:'/detail/:id',
        element:<DetailScreen />
    }
]