//https://www.geeksforgeeks.org/lca-for-general-or-n-ary-trees-sparse-matrix-dp-approach-onlogn-ologn/
//https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-project-setup
let path = []
path[1] = []
path[2] = []
let G = []
let flag
function LCA(a,b){
    if(a==b) return a

    path[1][0] = path[2][0] = 1

    flag = false
    DFS(1, 0, 1, 1, a, flag)

    flag = false
    DFS(1, 0, 2, 1, b, flag)

    let i=0
    console.log(path[1],path[2])
    while(path[1][i] == path[2][i]){
        if(path[1][i] === undefined)
            break
        i++
    }
    return path[1][i] == undefined ? path[1][i-1] : path[1][i-1]
}

function makeListaAdj(source, target) {
    if (G[source] == undefined || G[source] == null)
        G[source] = []

    G[source].push(target)
    if (G[target] == undefined || G[target] == null)
        G[target] = []
        
    G[target].push(source)
}

function DFS(cur, prev, pathNumber, ptr, node, flag) {
    let i;
    for(i=0;i<G[cur].length;i++){
        if(G[cur][i] != prev && !flag){
            path[pathNumber][ptr] = G[cur][i];
            if(G[cur][i] == node){
                flag = true
                path[pathNumber][ptr+1] = -1
                break;
            }
            DFS(G[cur][i], cur, pathNumber, ptr+1, node, flag)
        }
    }
}

makeListaAdj(1,2)
makeListaAdj(1,3)
makeListaAdj(2,4)
makeListaAdj(2,5)
makeListaAdj(2,6)
makeListaAdj(3,7)
makeListaAdj(3,8)
// console.log(G[5][0])
console.log(LCA(4,5))
