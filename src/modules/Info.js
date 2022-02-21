/**
 * ---------------------------------
 * Device info（设备信息）
 * ---------------------------------
 */

import {isPC, sysTem, checkScreenType, isWechat} from '../util/Tool';

export const Info = {
    platform: isPC() ? 'pc' : 'mobile',

    sysTem: sysTem(),

    screenType: checkScreenType(),

    isWechat: isWechat(),
}