import { BinarySearchTree } from '../../../src/dataStructor/BinarySearchTree';

test('BinarySearchTree', () => {
    let binarySearchTree = new BinarySearchTree<number>();

    expect(binarySearchTree.getRoot()).toBeNull();
    expect(binarySearchTree.getMaxDepth()).toEqual(0);
    expect(binarySearchTree.getMax()).toBeNull();
    expect(binarySearchTree.getMin()).toBeNull();
    expect(binarySearchTree.find(1)).toBeFalsy();
    expect(binarySearchTree.toString()).toEqual('');


    expect(binarySearchTree.levelOrder()).toEqual([]);
    expect(binarySearchTree.preOrder()).toEqual([]);
    expect(binarySearchTree.inOrder()).toEqual([]);
    expect(binarySearchTree.postOrder()).toEqual([]);

    binarySearchTree.insertNode(5);
    binarySearchTree.insertNode(2);
    binarySearchTree.insertNode(1);
    binarySearchTree.insertNode(3);
    binarySearchTree.insertNode(4);
    binarySearchTree.insertNode(0);
    binarySearchTree.insertNode(7);
    binarySearchTree.insertNode(9);
    binarySearchTree.insertNode(8);
    binarySearchTree.insertNode(6);

    expect(binarySearchTree.getRoot().val).toEqual(5);
    expect(binarySearchTree.getMaxDepth()).toEqual(4);
    expect(binarySearchTree.getMax().val).toEqual(9);
    expect(binarySearchTree.getMin().val).toEqual(0);
    expect(binarySearchTree.find(1)).toBeTruthy();

    expect(binarySearchTree.levelOrder()).toEqual([5, 2, 7, 1, 3, 6, 9, 0, 4, 8]);
    expect(binarySearchTree.preOrder()).toEqual([5, 2, 1, 0, 3, 4, 7, 6, 9, 8]);
    expect(binarySearchTree.inOrder()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(binarySearchTree.postOrder()).toEqual([0, 1, 4, 3, 2, 6, 8, 9, 7, 5]);

    expect(binarySearchTree.preOrderRec()).toEqual([5, 2, 1, 0, 3, 4, 7, 6, 9, 8]);
    expect(binarySearchTree.inOrderRec()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(binarySearchTree.postOrderRec()).toEqual([0, 1, 4, 3, 2, 6, 8, 9, 7, 5]);

    expect(binarySearchTree.toString()).toEqual('5,2,1,0,#,#,#,3,#,4,#,#,7,6,#,#,9,8,#,#,#');

    binarySearchTree.remove(10);
    binarySearchTree.remove(5);
    binarySearchTree.remove(2);
    binarySearchTree.remove(1);
    binarySearchTree.remove(3);
    binarySearchTree.remove(4);
    binarySearchTree.remove(0);
    binarySearchTree.remove(7);
    binarySearchTree.remove(9);
    binarySearchTree.remove(8);
    binarySearchTree.remove(6);

    expect(binarySearchTree.getRoot()).toBeNull();
    expect(binarySearchTree.getMaxDepth()).toEqual(0);
    expect(binarySearchTree.getMax()).toBeNull();
    expect(binarySearchTree.getMin()).toBeNull();
    expect(binarySearchTree.find(1)).toBeFalsy();
    expect(binarySearchTree.toString()).toEqual('');


    expect(binarySearchTree.levelOrder()).toEqual([]);
    expect(binarySearchTree.preOrder()).toEqual([]);
    expect(binarySearchTree.inOrder()).toEqual([]);
    expect(binarySearchTree.postOrder()).toEqual([]);

});
