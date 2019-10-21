import { TreeNode } from '../../../src/dataStructor/BinarySearchTree/TreeNode';

test('TreeNode', () => {
    let treeNode = new TreeNode<number>(1);
    expect(treeNode.val).toEqual(1);
    expect(treeNode.left).toBeNull();
    expect(treeNode.right).toBeNull();
});
