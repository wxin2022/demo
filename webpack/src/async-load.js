// const loadElement = async () => {
     // 调用方法时，才加载　ｊｑｕｅｒｙ
//   const { default: $ } = await import('jquery')
//   const num = Math.random()
//   return { $, num }
// }

const loadElement = async () => {
  // 等待主资源以及网络带宽加载释放后才加载， 推荐使用
  const { default: $ } = await import(/* webpackPrefetch: true */ 'jquery')
  const num = Math.random()
  return { $, num }
}

// const loadElement = async () => {
//   // 与主资源一起加载
//   const { default: $ } = await import(/* webpackPreload: true */ 'jquery')
//   const num = Math.random()
//   return { $, num }
// }
export { loadElement }

