import { OurCommunity } from "../components/pages/blog/OurCommunity";
import { AboutUs } from "../components/pages/home/aboutUs/AboutUs";
import { Services } from "../components/pages/services/Services";
import { Store } from "../components/pages/store/Store";


type JSXComponent = () => JSX.Element;

interface Route {
    path: string,
    Component: JSXComponent,
    name?: string,
    style?: boolean,
    userNavigation?: boolean,
    navBarNavigation?: boolean,
}

export const routes: Route[] = [
    { path: '/mundo-animal/', Component: AboutUs},
    // { path: 'aboutUs', Component: AboutUs, name: '¿QUIÉNES SOMOS?', navBarNavigation: true},
    { path: 'mundo-animal/ourCommunity', Component: OurCommunity, name: 'NUESTRA COMUNIDAD', navBarNavigation: true},
    { path: 'mundo-animal/services', Component: Services, name: 'SERVICIOS', navBarNavigation: true},
    { path: 'mundo-animal/store', Component: Store, name: 'TIENDA', navBarNavigation: true}
]