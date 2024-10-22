/**
 * @description: Is it a mobile device
 * @return {boolean}
 */

import isMoblie from "./isMoblie";
export default function isPc() {
    return !isMoblie();
}