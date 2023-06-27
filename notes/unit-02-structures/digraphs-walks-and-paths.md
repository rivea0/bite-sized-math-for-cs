---
layout: layout.njk
tags: [pages, structures]
title: "Digraphs: Walks and Paths"
date: 2023-01-18
eleventyNavigation:
  key: "15. Digraphs: Walks and Paths"
  order: 18
---

# Digraphs: Walks and Paths

A digraph (==directed graph==) is a type of graph to represent how things are connected together. 
As with many other graphs, digraphs have _nodes_ (or, _vertices_) and _directed edges._ That's what gives their name: their edges are directed.

![Digraph example](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Directed_graph_no_background.svg/320px-Directed_graph_no_background.svg.png)

One example is the World Wide Web itself, we can think of webpages as vertices, and the hyperlinks as edges.

A directed edge $e$ starts at what is called a ==tail== vertex, and ends at the ==head== vertex. 
If we denote it as $e = \textlangle{u \rightarrow v} \textrangle$, then, $u$ is the tail vertex, and $v$ is the head vertex. We can represent this edge as an ordered pair as well, such as: $(u, \ v)$. 

The set of vertices in a directed graph $G$, denoted as $V(G)$, is a binary relation where the domain and the codomain are the same set $V$.

The set of edges in $G$ are denoted as—you guessed it—$E(G)$.

So, we can write the set of vertices of the example graph above as $V = \{1, \ 2, \ 3, \ 4\}$, and the set of edges as $E = \{(1, \ 2), \ (1, \ 3), \ (3, \ 2), \ (3, \ 4), (4, \ 3)\}$.

---

There are some terms we need to be familiar with.

The ==in-degree== of a vertex is the number of arrows coming into it:

If $G$ is a digraph, and $v \in V(G)$:

$$\text{indeg}(v) = |\{e \in E(G) \ | \ \text{head}(e) = v\}|$$

The ==out-degree== of a vertex is the number of arrows coming out of it:

$$\text{outdeg}(v) = |\{e \in E(G) \ | \ \text{tail}(e) = v\}|$$


The total number of in-degrees and out-degrees will be the number of edges in the graph, $|E(G)|$:

$$\displaystyle\sum_{v \in V(G)} \text{indeg}(v) \ = \displaystyle\sum_{v \in V(G)} \text{outdeg}(v) = |E|$$

---

A ==walk== is a sequence of edges you follow. In the above diagram, for example, we can start at 1, go to 3, then go to 4, then go to 3 again. The length of a walk will be the number of edges that we go through (one less than the number of vertices), **not** the number of vertices we visit.
A ==path== is a special type of walk where you don't visit the same vertex twice. So, if we go back to 3 after visiting 4, it won't be a path.

We can represent a walk $v$ as such:

$$v = v_0 \ \textlangle{v_0 \rightarrow v_1} \textrangle \ v_1 \ \textlangle{v_1 \rightarrow v_2} \textrangle \ v_2 \ ... \ \textlangle{v_{k - 1} \rightarrow v_k} \textrangle \ v_k$$
where $\textlangle{v_i \rightarrow v_{i + 1}} \textrangle \in E(G)$ for $i \in [0, k)$.


In order for this walk to be a path, all $v_i$'s should be different, because if $i \neq j$ then $v_i \neq v_j$.

A walk that begins and ends at the same vertex is called a ==closed walk==.
A ==cycle== is a closed walk where vertices are different except for the beginning and end vertices. Cycles must have a positive length.

---

#### What about a single vertex?
If a digraph has only one vertex, its length is zero, as it is considered to begin and end at itself. It is a closed walk as well, but since its length is not positive, it is not a cycle.

#### When is a walk not a walk?
An example: $\textlangle{c \rightarrow b} \textrangle \ \textlangle{b \leftarrow a} \textrangle \ \textlangle{a \rightarrow d} \textrangle$. 
This is not considered a walk because its edges are in a wrong direction.

---

Just like your daily walk, we can also have rests during these walks, too. For example, if a walk $f$ ends at vertex $v$, and a walk $r$ starts with this same vertex $v$, their _merge_ (denoted as $\textbf{f} \widehat{ \ v \ } \textbf{r}$ ) is the walk starting with $f$, continuing with $r$. 

_Note that the term **merge** does not really imply concatenation because the vertex $v$ would appear twice in such case._

The length of a merge is exactly as you thought it would be: the sum of those two walks: $|\textbf{f} \widehat{ \ v \ } \textbf{r}| = |\textbf{f}| + |\textbf{r}|$.

---

We can represent a digraph using an _adjacency matrix_.
Simply, we put $1$ where there is an edge between two vertices, and $0$ otherwise.
Let $A_G$ define the adjacency matrix of a graph $G$:

$$(A_G)_{ij} =
\begin{cases}
1 \quad  \text{if } \textlangle{v_i \rightarrow v_j} \textrangle \in E(G), \\
0 \quad \text{otherwise.}
\end{cases}
$$

Let's use the diagram example we have at the start of this section.
Remember that its set of edges is $E = \{(1, \ 2), \ (1, \ 3), \ (3, \ 2), \ (3, \ 4), (4, \ 3)\}$.
Its adjacency matrix will then look like this:

$$
\begin{array}{|c|c|c|c|c|} \hline  & \ \textbf{1} \ & \ \textbf{2} \ & \ \textbf{3} \ & \ \textbf{4} \ \\ \hline \ \textbf{1} \ & \ 0 \ & \ 1 \ & \ 1 \ & \ 0 \ \\ \hline \ \textbf{2} \ & \ 0 \ & \ 0 \ & \ 0 \ & \ 0 \ \\ \hline \ \textbf{3} \ & \ 0 \ & \ 1 \ & \ 0 \ & \ 1 \ \\ \hline \ \textbf{4} \ & \ 0 \ & \ 0 \ & \ 1 \ & \ 0 \ \\ \hline \end{array}
$$

---

One of the questions we can ask of a digraph is whether there is a walk from one vertex to another — in other words, whether they are _connected_, or whether one is _reachable_ from the other.

We can denote this _walk relation_ as:

$$u \ G^* \ v = \text{there is a walk in } G \text{ from } u \text{ to } v$$

Also, a _positive walk relation_ as:

$$u \ G^+ \ v = \text{there is a positive length walk in } G \text{ from } u \text{ to } v$$

