// 向下找到所有指定的组件
export const findComponentsDownward = (context, componentName) => {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// 获取当前元素距离body的偏移距离
export const offset = (curEle) => {
  // 1、先获取当前本身的 左/上偏移
  let curLeft = curEle.offsetLeft,
    curTop = curEle.offsetTop,
    p = curEle.offsetParent
  // 2、累加父参照物的边框和偏移（一直向上找，找到body为止，每当找到一个父级参照物都把它的边框和偏移累加起来，根据元素不一样，具体找几次也不知道）
  while (p.tagName !== 'BODY') { // 当找到的父级参照物是body结束查找和累加操作
    // 3、把找到的父参照物的边框和偏移值累加起来
    curLeft += p.clientLeft
    curLeft += p.offsetLeft
    curTop += p.clientTop
    curTop += p.offsetTop
    p = p.offsetParent // 基于当前找到的父级参照物继续向上查找
  }
  return {
    top: curTop,
    left: curLeft
  }
}
