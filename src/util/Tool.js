//  Privacy methods and private properties

// 用字符串形式添加dom
export function appendDomByStr(domStr) {
    let 
    divTemp = document.createElement("div"), 
    nodes = null,    // 文档片段，一次性append，提高性能  
    fragment = document.createDocumentFragment(),
    parent = document.getElementsByTagName('body')[0];

    divTemp.innerHTML = domStr;  
    nodes = divTemp.childNodes;  

    for (let i = 0, length = nodes.length; i < length; i += 1) {  
        fragment.appendChild(nodes[i].cloneNode(true));  
    }  
    parent.appendChild(fragment);
    // 据说下面这样子世界会更清净  
    nodes = null;  
    fragment = null; 
}

// 检测当前设备是华为带bar、全面屏、还是普通设备
export function checkScreenType(){
    if (window.innerWidth / window.innerHeight >= 0.66) {
        //华为
        return "short";
    }

    if (window.innerWidth / window.innerHeight >= 0.56 && window.innerWidth / window.innerHeight < 0.66) {
        //ihpne5 6 7 8 普通安卓分辨率
        // window.normalScreen = info.normalScreen = true;
        return 'normal';
    }

    if(window.innerWidth / window.innerHeight < 0.56) {
        //X screen 640*1386 wechat(640*1277) || 750*1624  wechat(750*1496)
        return 'X';
    }
}


// 判断是不是pc端
export function isPC() {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


export function sysTem() {
    const u = navigator.userAgent;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    const isiOS = u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1; // ios终端

    if (isAndroid) {
        return 'android';
    } 
    else if (isiOS) {
        return 'ios';
    }
    else {
        return 'not moblie';
    }
}