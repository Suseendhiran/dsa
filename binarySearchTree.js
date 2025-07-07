class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(val  === current.val) {
                return undefined
            }
            if(val < current.val){
                if(!current.left){
                    current.left = newNode;
                    return this
                }
                current = current.left
            }else if(val > current.val){
                if(!current.right){
                    current.right = newNode;
                    return this
                }
                current = current.right
            } 
        }
    }
    find(val){
        if(!this.root) return undefined;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left
            }else if(val>current.val){
                current = current.right
            }else{
                found = true
            }
        }
        return current
    }
    contains(val){
        if(!this.root) return false;
        let current = this.root;
        while(current){
            if(val < current.val){
                current = current.left
            }else if(val>current.val){
                current = current.right
            }else{
                return true
            }
        }
        return false
    }
}

//        20
//    10      22
//  7    15      23
//     13   18
//    11
let bst = new BinarySearchTree();
bst.insert(20)
bst.insert(10)
bst.insert(15)
bst.insert(13)
bst.insert(22)
bst.insert(7)
bst.insert(11)
bst.insert(18)
bst.insert(23)
console.log("bst",bst)
