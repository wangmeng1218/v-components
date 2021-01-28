import XEUtils from 'xe-utils/ctor'

const eventStore = []

export const GlobalEvent = {
  on (comp, type, cb) {
    if (cb) {
      eventStore.push({ comp, type, cb })
    }
  },
  off (comp, type) {
    XEUtils.remove(eventStore, item => item.comp === comp && item.type === type)
  }
}

export default GlobalEvent
