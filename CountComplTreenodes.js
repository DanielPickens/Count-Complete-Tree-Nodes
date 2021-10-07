const countNodes = function(root) {
     if(root==null) return 0;
        return 1 + countNodes(root.left) + countNodes(root.right);
    }



/*
Success
Details 
Runtime: 92 ms, faster than 99.12% of JavaScript online submissions for Count Complete Tree Nodes.
Memory Usage: 58.4 MB, less than 58.48% of JavaScript online submissions for Count Complete Tree Nodes.
*/
