// merge
    function mergeTree(tree1 , tree2){
        function _recursiveFun(node1 , node2){
            if(!node1 && node2) return node2
            if(node1 && !node2) return node1
            node1.value += node2.value
            if(node1.left || node2.left) node1.left = _recursiveFun(node1.left , node2.left)
            if(node1.right || node2.right) node1.right = _recursiveFun(node1.right , node2.right)
            return node1
        }
        _recursiveFun(tree1 , tree2)
        return tree1
    }
// invert
    function invertTree(tree){
        let temp;
        function _recursiveFun(node){
            if(!node) return null
            temp = node.left
            node.left = node.right
            node.right = temp
            _recursiveFun(node.left)
            _recursiveFun(node.right)
        }
        _recursiveFun(tree)
        return tree
    }
// balance
    function isBalanced(root){
        if(!root) return null
        const result = [true];
        height(root,result)
        return result[0]
    }
    function height(root , result){
        if(!root) return null
        let left = height(root.left , result)
        let right= height(root.right , result)
        if(Math.abs(left - right) > 1) result[0] = false
        return Math.max(left , right) + 1
    }
// BST
    function searchBST(root , val){
        if(!root){return null}
        let current = root
        while(current){
            if(val < current.val) { current = current.left}
            else if(val > current.val) {current = current.right}
            else if(val === current.val) {return current}
        }
        return null;
    }
// symmetric
    function isSymmetric (tree){
        function _recursiveFun(node1 , node2){
            if(!node1 && !node2){ return true}
            if(node1 && node2 && node1.value === node2.value){
                return _recursiveFun(node1.left , node2.right) && _recursiveFun(node1.right , node2.left)
            }
            return false
        }
        return _recursiveFun(tree.left , tree.right)
    }
// leavesCount
    function leavesCount(tree){
        let count = 0;
        function _recursiveFun(node){
          if(!node.left && !node.right) {
            count ++
        }
        if(node.left) _recursiveFun(node.left)
        if(node.right) _recursiveFun(node.right)  
        }
        _recursiveFun(tree)
        return count
    }
// sumOfLeftNodes
function sumOfLeftNodes(tree){
    let sum =0
    function _recursiveFun(node){
        if(node.left){ sum+= node.left.value;  _recursiveFun(node.left)}
        if(node.right) {_recursiveFun(node.right)}
    }
    _recursiveFun(tree)
    return sum;
}
// leftNodeCounter
function leftNodeCounter(tree){
    let sum = 0
    function _recursiveFun(node){
        if(node.left){ sum++; _recursiveFun(node.left)}
        if(node.right) { _recursiveFun(node.right)}
    }
    _recursiveFun(tree)
    return sum
}
// sameTree
function sameTree(tree1 ,tree2){
    function _recursiveFun(node1 , node2){
        if(!node1 && !node2) return true
        if(node1 && node2 && node1.value === node2.value ){
            return _recursiveFun(node1.left , node2.left) && _recursiveFun(node1.right , node2.right)
        }
        return false
    }
    return _recursiveFun(tree1 , tree2)
}
// sumOfLeaves
function sumOfLeaves(tree){
    let sum = 0
    function _recursiveFun(node){
        if(!node.left && !node.right){
            sum += node.value
        }
        if(node.left){
            _recursiveFun(node.left)
        }
        if(node.right){
            _recursiveFun(node.right)
        }
    }
    _recursiveFun(tree)
    return sum
}
// sumOfLeftLeaves
function sumOfLeftLeaves(tree){
    let sum = 0
    function _recursiveFun(node){
        if(node.left){
            if(!node.left.left && node.left.right){
                sum += node.left.value
            }
            _recursiveFun(node.left)
        }
        if(node.right){ _recursiveFun(node.right)}
    }
    _recursiveFun(tree)
    return sum
}
