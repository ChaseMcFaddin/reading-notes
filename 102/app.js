function Graph() {
  this.nodes = [];
  this.edges = [];
}

Graph.prototype.addNodes = function(n){
  this.nodes.push(n);
};

Graph.prototype.addEdges = function(n){
  this.edges.push(n);
};

var graphObj = new Graph();