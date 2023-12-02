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

const getTreeSum = (tree) => {
  let sum = 0;

  if (tree.value) {
    sum += tree.value
  }

  if (tree.children) {
    for (let index = 0; index < tree.children.length; index++) {
      sum += getTreeSum(tree.children[index])
    }
  }

  return sum;
}

console.log(getTreeSum(tree));