/**
 * ---------------------------------
 * Device info（设备信息）
 * ---------------------------------
 */

import {isPC, sysTem, checkScreenType} from '../util/Tool';

export const Info = {
    platform: isPC() ? 'pc' : 'mobile',

    sysTem: sysTem(),

    screenType: checkScreenType()
}