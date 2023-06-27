---
layout: layout.njk
tags: [pages, probability]
title: Random Walks & PageRank
date: 2023-02-06
eleventyNavigation:
  key: 34. Random Walks & PageRank
  order: 37
---

# Random Walks & PageRank

A ==random walk== describes _a situation in which an object moves in a sequence of steps in randomly chosen directions_.

[This page](https://www.mit.edu/~kardar/teaching/projects/chemotaxis(AndreaSchmidt)/index.htm) has a short, delightful explanation of an introduction to random walks.

---

Think of the World Wide Web as a digraph; the pages are the nodes, and the edges are the hyperlinks that are pointing to them.

If we were to rank the nodes, which one should be ranked first?
It makes sense that the best-ranked one has to be the one with the maximum number of indegree (the number of edges coming in to that node), so its _page rank_ should be its indegree—the more links to that page, the better ranked it is. But this is a naive idea.

Instead, the probability of going to each page will be considered after taking a long random walk in the graph.

All the edges that go out from a vertex will have the same probability of being chosen.
So, if we are at page $x$, and there are 3 links out of it, each one has a probability of $\frac{1}{3}$ of being clicked. 

So, if $\text{outdeg}(V)$ denotes the number of outgoing edges from $V$, the probability of each edge to $W$ that goes out from $V$ will be:

$$\text{Pr}[(V, \ W)] = \frac{1}{\text{outdeg}(V)}$$

What about the pages that have no links going out? Then comes the _supernode_.

There will be an edge from the supernode to all the other nodes in the graph with equal probability. Also, every page will have an edge to the supernode as well.
In the case that a page has no outgoing links, its edge to the supernode will have a probability of $1$.

---

==Stationary distribution== is _an assignment of probabilities to vertices in a digraph, if for all vertices $x$_:

$$\text{Pr}[\text{at }x] = \text{Pr}[\text{go to }x \text{ at next step}]$$

So, it is when the _next-step distribution is the same as the current distribution_.
That is, the updated probabilities will be the same as the ones we were starting with.

