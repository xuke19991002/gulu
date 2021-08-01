// 由一个组件，向上找到最近的指定组件
export const findComponentUpward = (context, componentName) => {
  let parent = context.$parent
  let parentName = parent.$options.name
  // parent存在 name不存在 直接循环进入下一轮即可 name存在去比较当前组件名是否是我们想要得到的
  while (parent && (!parentName || [componentName].indexOf(parentName) < 0)) {
    parent = parent.$parent
    if (parent) {
      parentName = parent.$options.name
    }
  }
  return parent
}

// 向上找到所有的指定组件 返回找到符合条件组件实例集合 多用于递归组件
export const findComponentsUpward = (context, componentName) => {
  let parents = []
  let parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) {
      parents.push(parent)
      return parents.concat(findComponentsUpward(parent, componentName))
    }
  } else {
    return []
  }
}

// 向下找到最近的指定组件
export const findComponentDownward = (context, componentName) => {
  const childrens = context.$children
  let children = null
  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name

      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}

// 向下找到所有指定的组件
export const findComponentsDownward = (context, componentName) => {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

// 由一个组件，找到指定组件的兄弟组件 exceptMe 是否排除自身
export const findBrothersComponents = (context, componentName, exceptMe = true) => {
  let res = context.$parent.$children.filter(item => item.$options.name === componentName)
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe && index > -1) res.splice(index, 1)
  return res
}

// 获取当前元素距离body的偏移距离
export const offset = curEle => {
  // 1、先获取当前本身的 左/上偏移
  let curLeft = curEle.offsetLeft,
    curTop = curEle.offsetTop,
    p = curEle.offsetParent
  // 2、累加父参照物的边框和偏移（一直向上找，找到body为止，每当找到一个父级参照物都把它的边框和偏移累加起来，根据元素不一样，具体找几次也不知道）
  while (p.tagName !== 'BODY') {
    // 当找到的父级参照物是body结束查找和累加操作
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
