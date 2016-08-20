/* Wiki dijkstra psudue code 
 * 1  function Dijkstra(Graph, source):
 * 2
 * 3      create vertex set Q
 * 4
 * 5      for each vertex v in Graph:             // Initialization
 * 6          dist[v] ← INFINITY                  // Unknown distance from source to v
 * 7          prev[v] ← UNDEFINED                 // Previous node in optimal path from source
 * 8          add v to Q                          // All nodes initially in Q (unvisited nodes)
 * 9
 * 10      dist[source] ← 0                        // Distance from source to source
 * 11      
 * 12      while Q is not empty:
 * 13          u ← vertex in Q with min dist[u]    // Source node will be selected first
 * 14          remove u from Q 
 * 15          
 * 16          for each neighbor v of u:           // where v is still in Q.
 * 17              alt ← dist[u] + length(u, v)
 * 18              if alt < dist[v]:               // A shorter path to v has been found
 * 19                  dist[v] ← alt 
 * 20                  prev[v] ← u 
 * 21
 * 22      return dist[], prev[]
 */
var dijkstra = {
	minDistance: function (dist, spt) {
		var min = number.MAX_VALUE
		var min_index;

		for (var v = 0; v < size; v++) {
			if (spt[v] == false && dist[v] <= min) {
				min = dist[v];
				min_index = v;
			}
		}
		return min_index;
	},
	run: function (G, source, target) {
		var nodes = G.nodes();
		var edges = G.edges();

		var Q;
		var dist;
		var prev;

		for (var i = 0; i < nodes.length; ++i) {
			dist[i] = Number.MAX_VALUE;
			prev[i] = null;
			Q[i] = nodes[i];
		}
		dist[source] = 0;

		while (Q.length > 0) {
			u;
			Q = Q.splice(u, 1);
		}
	}
}
var algorithm = {
	dijkstra: dijkstra
}
window.algorithm = algorithm;