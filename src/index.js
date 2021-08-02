import Test from './components/Test/index'
import Icon from "./components/Icon/index";
import SvgAnimation from "./components/SvgAnimation/index";
import ImoocLoading from "./components/ImoocLoading/index";
import ImoocFlyBox from "./components/ImoocFlyBox/index";
import ImoocContainer from "./components/Container/index";


export default function (Vue) {
    Vue.use(Test);
    Vue.use(Icon);
    Vue.use(SvgAnimation);
    Vue.use(ImoocLoading);
    Vue.use(ImoocFlyBox);
    Vue.use(ImoocContainer);
};
