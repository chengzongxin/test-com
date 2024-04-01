import warnSunBtn from './warnSunBtn.vue'
// 为组件添加 install 方法，用于按需引入
warnSunBtn.install = function (Vue) {
  Vue.component(warnSunBtn.name, warnSunBtn)
}
export default warnSunBtn;
