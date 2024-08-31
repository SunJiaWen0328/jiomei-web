/*
 * @Author: sunjiawen
 * @Date: 2022-01-12 08:26:05
 * @LastEditors: sunjiawen
 * @LastEditTime: 2022-03-01 14:36:05
 * @Description: 菜单项数据结构
 */

type Dictionary<T> = { [key: string]: T }

export interface MenuItem {
  /** 菜单的 key，防止某些情况出现同名通路径的菜单，此时可以额外指定key */
  key?: string

  /** 图标名称，iconfonts 图标集 */
  icon?: string

  /** 页面路由名称 */
  name: string

  /** 页面标题 */
  title: string

  /** 页面参数 */
  query?: Dictionary<string>

  params?: Dictionary<string>
}
