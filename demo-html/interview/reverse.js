function reverseTree(root) {
  if (root) {
    [root.left, root.right] = [root.right, root.left]
    reverseTree(root.left)
    reverseTree(root.right)
  }
  return root
}
