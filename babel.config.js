/*
 * @Author: your name
 * @Date: 2019-11-08 14:49:08
 * @LastEditTime: 2019-11-08 16:09:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chatting\babel.config.js
 */
module.exports = function (api) {
  api.cache(true);

  const presets = [ '@vue/cli-plugin-babel/preset' ];
  const plugins = [["import", {
    libraryName: "view-design",
    libraryDirectory: "src/components"
  }]];

  return {
    presets,
    plugins
  };
}