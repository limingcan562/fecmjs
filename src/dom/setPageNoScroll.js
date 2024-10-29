// import 
/**
 * @description: Prohibit page scrolling
 */
import setStyle from '../dom/setStyle';

export default function setPageNoScroll() {
    const style = {
        height:  `${window.innerHeight}px`,
        overflow: 'hidden'
    }
    setStyle('body', style);
}