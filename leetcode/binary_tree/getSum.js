const tree = {
  value: 5,
  children: [
    {
      value: 5,
      children: [
        {
          children: null,
          value: 5
        },
        {
          children: null,
          value: 5
        }
      ]
    },
    {
      value: 5,
      children: [
        {
          children: null,
          value: 5
        },
      ]
    }
  ]
}

const getSumOfTree = (node) => {
  if (!node) {
    return 0;
  }
  let sum = node.value;

  node.children?.map((child) => {
    sum += getSumOfTree(child)
  })

  // if (node.children) {
  //   for (const child of node.children) {
  //     sum += calculateSum(child);
  //   }
  // }
  return sum;
}

console.log(getTreeSum(tree));