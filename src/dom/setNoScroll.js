// import 
/**
 * @description: Prohibit page scrolling
 */
import setStyle from '../dom/setStyle';

export default function setNoScroll() {
    const style = {
        height:  `${window.innerHeight}px`,
        overflow: 'hidden'
    }
    setStyle('body', style);
}