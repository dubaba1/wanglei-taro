/**
 * 判断列表中是否包含指定元素
 * @param list 列表
 * @param item 指定元素
 * @returns {boolean} 包含返回true，不包含返回false
 */
export const isListContain = (list: Array<any>, item: any): Boolean => {
  if (list == null) return false;
  return list.indexOf(item) !== -1
}

/**
 * 删除指定元素
 * @param list 列表
 * @param item 指定元素
 */
export const removeByItem = (list: Array<any>, item: any) => {
  if (list == null) return;
  let index = list.indexOf(item);
  if (index === -1) return;
  list.splice(index, 1);
};

/**
 * 删除指定元素
 * @param list 列表
 * @param item 指定元素
 */
export const removeByIndex = (list: Array<any>, index: number) => {
  if (list == null) return;
  list.splice(index, 1);
};

