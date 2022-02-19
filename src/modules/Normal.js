/**
 * ---------------------------------
 * General method（通用方法）
 * ---------------------------------
 */

// tip pop style
// import showTipsStyle from '../styles/showTips.less';
import {appendDomByStr} from '../util/Tool';

let 
showTipsDelay = 1000, 
showTipsAniTime = 500, 
showTipsObjStr = `<section class="__Fecmplugin_tip_pop" id="__Fecmplugin_tip_pop"><p class="__Fecmplugin_text" id="__Fecmplugin_text"></p></section>`,
showTipsObj = null;

export const Normal = {
    // 加载图片
    loadImage(src = '') {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject();
            img.src = src;
        })
    },

    // 延时
    wait(delay = 500) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), delay);
        })
    },

    // 显示提示
    showTips({
        autoClose = true,
        delay = 1000,
        text = 'loading...'
    } = {}) {
        // 引入样式
        // showTipsStyle.use();

        // 插入dom
        if (!showTipsObj) {
            // console.log(this);
            appendDomByStr(showTipsObjStr);
            showTipsObj = document.getElementById('__Fecmplugin_tip_pop');
        } 
        
        document.getElementById('__Fecmplugin_text').innerHTML = text;
        showTipsObj.style.opacity = 1;
        showTipsObj.style.visibility = 'visible';
        showTipsDelay = delay;

        if (autoClose) {
            const totalTime = showTipsAniTime + showTipsDelay;
            this
            .wait(totalTime)
            .then(() => {
                showTipsObj.style.opacity = 0;
                return this.wait(showTipsAniTime);
            })
            .then(() => {
                showTipsObj.style.visibility = 'hidden';
            })
        }
    },

    // 关闭提示
    closeTips() {
        showTipsObj.style.opacity = 0;
        this
        .wait(showTipsAniTime)
        .then(() => {
            showTipsObj.style.visibility = 'hidden';
            return this.wait(showTipsDelay);
        });
    },

    // 元素是否出现在可视区
    isPartOfElementInViewport(el) {
        // el为要检测的dom对象
        const
        rect         = el.getBoundingClientRect(),
        windowHeight = (window.innerHeight || document.documentElement.clientHeight),
        windowWidth  = (window.innerWidth || document.documentElement.clientWidth),
        vertInView   = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0),
        horInView    = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        // return (vertInView && horInView);

        if(vertInView && horInView){
            // console.log('可视')
            return true;
            
        }
        else{
            // console.log('不可视')
            return false;
        }
    }
}
