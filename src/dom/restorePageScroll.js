// import 
/**
 * @description Restore page scrolling
 */
import setStyle from '../dom/setStyle';

export default function restorePageScroll() {
    const style = {
        height:  `auto`,
        overflow: 'visible'
    }
    setStyle('body', style);
}