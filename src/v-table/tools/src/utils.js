import XEUtils from 'xe-utils/ctor'
import GlobalConfig from '../../conf'

let zindexIndex = 0
let lastZindex = 1

function outLog (type) {
  return function (message, params) {
    const msg = UtilTools.getLog(message, params)
    console[type](msg)
    return msg
  }
}

export const UtilTools = {
  warn: outLog('warn'),
  error: outLog('error'),
  getLog (message, args) {
    return `[vxe-table] ${GlobalConfig.i18n(message, args)}`
  },
  getFuncText (content) {
    return XEUtils.isFunction(content) ? content() : (GlobalConfig.translate ? GlobalConfig.translate(content) : content)
  },
  nextZIndex () {
    lastZindex = GlobalConfig.zIndex + zindexIndex++
    return lastZindex
  },
  getLastZIndex () {
    return lastZindex
  }
}

export default UtilTools
