---
layout: layout.njk
tags: [pages, counting]
title: Counting with Bijections
date: 2023-01-27
eleventyNavigation:
  key: 24. Counting with Bijections
  order: 27
---

# Counting with Bijections

> There is a way to count one thing by counting another. 

That's not a "zen quote." What it implies is that counting one thing by counting another is to find a bijection between them. 
(On second thought, it could be a zen quote.)

The reason that it works is that when there is a bijection between two sets, that means the sets are of the same size. This is known as the ==Bijection Rule==.

We did one example already (_Why is the size of a power set is $2^n$?_) in [sets](bite-sized-math-for-cs/unit-01-proofs/sets), where we counted the number of subsets of a set by counting the number of $n$-bit string representations. That example pretty much covers this concept.

---

The ==sum rule== is obvious. If we have two disjoint sets $A$ and $B$, the size of their union is the sum of the size of $A$ and the size of $B$: $|A \cup B| = |A| + |B|$.

Say, we can only use lowercase letters, uppercase letters, and digits for a password. Considering that the letters are only from the English alphabet, how many possible characters can we use?

Well, there are $26$ letters and $10$ digits ($0$-$9$), so the number of possible characters is $26 + 26 + 10$, which is $62$. 

---

The ==product rule== is also a clear concept. The size of the [product of two sets](https://en.wikipedia.org/wiki/Cartesian_product) $A$ and $B$ will be the product of their sizes.

If $|A| = m \text{ and } |B| = n$, then 

$$|A \times B| = m \cdot n$$

Let's say that set $A$ is $\{1, \ 2, \ 3\}$. Set $B$ is $\{a, \ b\}$.
Their product is $\{(1, \ a), \ (1, \ b), \ (2, \ a), \ (2, \ b), \ (3, \ a), \ (3, \ b)\}$. 
The size of $A$ is $3$, the size of $B$ is $2$, and the size of their product is $3 \cdot 2 = 6$.

