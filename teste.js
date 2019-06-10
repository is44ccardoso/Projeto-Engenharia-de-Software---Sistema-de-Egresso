var path = []
path[1] = []
path[2] = []
var G = []
var flag
function LCA(a,b){
    if(a==b) return a

    path[1][0] = path[2][0] = 1

    flag = false
    DFS(1, 0, 1, 1, a, flag)

    flag = false
    DFS(1, 0, 2, 1, b, flag)

    var i=0
    while(path[1][i] == path[2][i]) i++
    return path[1][i-1]
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
    for(i=0;i<G[cur].length;i++){
        if(G[cur][i] != prev && !flag){
            path[pathNumber][ptr] = G[cur][i];
            if(G[cur][i] == node){
                flag = true
                path[pathNumber][ptr+1] = -1
                return;
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
console.log(LCA(4,7))
console.log(LCA(4,6))