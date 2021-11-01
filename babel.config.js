module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [ ["component", //针对mint-ui实现按需打包，引入什么就打包什么，相应样式自动打包
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]
}
