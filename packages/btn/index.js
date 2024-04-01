import testCom from './testCom.vue'
// 为组件添加 install 方法，用于按需引入
testCom.install = function (Vue) {
  Vue.component(testCom.name, testCom)
}
export default testCom;
