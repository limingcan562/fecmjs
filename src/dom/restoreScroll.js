// import 
/**
 * @description Restore page scrolling
 */
import setStyle from '../dom/setStyle';

export default function restoreScroll() {
    const style = {
        height:  `auto`,
        overflow: 'visible'
    }
    setStyle('body', style);
}