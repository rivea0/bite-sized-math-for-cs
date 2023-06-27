---
layout: layout.njk
tags: [pages, structures]
title: Partial Orders and Equivalence
date: 2023-01-20
eleventyNavigation:
  key: 17. Partial Orders and Equivalence
  order: 20
---

# Partial Orders and Equivalence

Remember that a digraph is a binary relation where the domain and codomain are the vertices.

Let's say that a relation $R : A \rightarrow A$ is a digraph with vertices $A$.

We can say that 

| |
| :--- |
| $R$ is ==reflexive== when every vertex has a self-loop: |
| $$\forall x \in A. \ x \ R \ x$$ |


| |
| :--- |
| $R$ is ==irreflexive== when there are no self-loops: |
| $$\neg[\exists x \in A. \ x \ R \ x]$$ |


| |
| :--- |
| $R$ is ==symmetric== if there is an edge from $x$ to $y$, there is an edge back from $y$ to $x$: |
| $$\forall x, \ y \in A. \ x \ R \ y \implies y \ R \ x$$ |


| |
| :--- |
| $R$ is ==asymmetric== when there is at most one directed edge between any two vertices, and there are no self-loops: |
| $$\forall x, \ y \in A. \ x \ R \ y \implies \neg(y \ R \ x)$$ |


| |
| :--- |
| $R$ is ==antisymmetric== when there is at most one directed edge between any two distinct vertices, but there may be self-loops: |
| $$\forall x \neq y \in A. \ x \ R \ y \implies \neg(y \ R \ x)$$ |
| that is, |
| $$\forall x, \ y \in A. \ (x \ R \ y \land y \ R \ x) \implies x = y$$ |


| |
| :--- |
| $R$ is ==transitive== if there is a positive length path from $u$ to $v$, then there is an edge from $u$ to $v$: |
| $$\forall x, \ y, \ z \in A. \ (x \ R \ y \land y \ R \ z) \implies x \ R \ z$$ |


| |
| :--- |
| $R$ is ==linear== when given any two vertices, there is an edge between them in one direction or the other: |
| $$\forall x \neq y \in A. \ (x \ R \ y \lor y \ R \ x)$$ |

---

Let's now define what is called a ==strict partial order==:

> A relation that is transitive and irreflexive is called a _strict partial order_.

_Transitivity_ says that merging a walk from $u$ to $v$ with a walk from $v$ to $w$ gives a walk from $u$ to $w$.

_Irreflexivity_ says that there is no positive length walk from a vertex to itself.

We defined them using graph terminology, but we can even think of an example for a strict partial order that has nothing to do with graphs at all. Imagine the "less than" operation:
If $x \lt y$ and $y \lt z$, then $x \lt z$. It is transitive.
Since $x \nless x$ implies irreflexivity, we can say that the "less than" operation is both transitive and irreflexive.

---

One distinction to note is that in _asymmetry_, self-loops are never allowed; it is _antisymmetry_ that allows it. Since asymmetry implies irreflexivity, we can now better define strict partial orders: 

> A binary relation $R$ on a set $A$ is a _strict partial order_ iff it is transitive and asymmetric.

Aside from strict partial orders, there are also ==weak partial orders==. They allow self-loops:

> A binary relation on a set is a _weak partial order_ iff it is transitive, reflexive, and antisymmetric.

---

If you have two different numbers, one will be larger than the other. Partial orders with this property are called ==linear orders==. They are also called ==total orders==.

---

An ==equivalence relation== is a relation that is reflexive, transitive, and symmetric.

A trivial example of an equivalence relation is equality ($=$). It's reflexive, transitive, and symmetric.

One thing to note that if there is a walk from $u$ to $v$, and a walk from $v$ to $u$ (the symmetry property), it is also said that $u$ and $v$ are _strongly connected_.

The strong connectedness relation in a digraph is an equivalence relation.

There are also ==equivalence classes==:

> The _equivalence classes_ of an equivalence relation on a set $A$ are the blocks of a partition of $A$.

_Note: We mentioned **partition** briefly in the [previous section](bite-sized-math-for-cs/unit-02-structures/directed-acyclic-graphs/)._

---

Graphs with the same connections are called ==isomorphic==. 
When there is an _edge-preserving bijection_ between two graphs, it means that they are isomorphic.
