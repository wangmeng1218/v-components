import TimeLine from './TimeLine'
import CusInput from './Form/CusInput'
import CusFormItem from './Form/FormItem'
import CusForm from './Form/Form'
import DynamicForm from './DynamicForm'

const customizeComponent = {
  install (Vue) {
    Vue.component('TimeLine', TimeLine)
    Vue.component('CusInput', CusInput)
    Vue.component('CusFormItem', CusFormItem)
    Vue.component('CusForm', CusForm),
    Vue.component('DynamicForm', DynamicForm)
  }
}

export default customizeComponent
