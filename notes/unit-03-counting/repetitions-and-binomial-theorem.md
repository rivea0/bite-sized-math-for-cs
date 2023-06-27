---
layout: layout.njk
tags: [pages, counting]
title: Repetitions & Binomial Theorem
date: 2023-01-28
eleventyNavigation:
  key: 25. Repetitions & Binomial Theorem
  order: 28
---

# Repetitions & Binomial Theorem

First, let's look at another rule, namely, the ==generalized bijection rule==.

If we have a total function from set $A$ to set $B$, and it is _k-to-1_ (each $B$ element is hit by exactly _k_ elements), then the cardinality of $A$ is $k$ times the cardinality of $B$:

$$|A| = k|B|$$

We can use a simple example. 
Let's say we want to count how many people are in a room. Given that everybody has $2$ shoes, we can count the number of shoes and divide the number by $2$ to find the number of people. In this case, set $A$ is the set of shoes, and set $B$ is the set of all people. 

---

The number of ways to choose the set of $m$ elements among $n$ is _$n$ choose $m$_, denoted by the ==binomial coefficient== notation: $\binom{n}{m}$.

It is defined as: 

$$\frac{n!}{m!(n - m)!}$$


---

Let's look at $(1 + x)^2$. We can expand it, and the result will be 

$$1 + 2x + x^2$$

Now, let's look at $(1 + x)^3$. We get 

$$1 + 3x + 3x^2 + x^3$$

What we're looking for here is a pattern.

And, that's where the ==binomial theorem== comes in.

Let's look at $(1 + x)^n$. 
There are $2$ terms in $(1 + x)$, each term will _correspond to selecting $1$ or $x$ from each of the $n$ factors_, which means we will have in total $2^n$ terms. 
So, with $(1 + x)^2$, our $n$ is $2$, and the factors are $(1 + x)(1 + x)$.
Doing the computation, all the terms we have are $1$, $x$, $x$, and $x^2$ — adding up to $1 + 2x + x^2$.

The coefficient of $x^k$ is the number of $x^k$'s among the $2^n$ terms. In the case of our example, it is $1$ (we don't need to write $1x^2$).

We can call this coefficient $c_k$, then represent it as $c_k = \binom{n}{k}$.

And, the binomial formula is:

$(1 + x)^n = \binom{n}{0} + \binom{n}{1}x + \binom{n}{2}x^2 + \ ... \ + \binom{n}{n}x^n$

More generally, it can be written as:

$$(x + y)^n = \binom{n}{0}y^n + \binom{n}{1}xy^{n - 1} + \binom{n}{2}x^2y^{n - 2} + \binom{n}{k}x^ky^{n - k} + \ ... \ + \binom{n}{n}x^n$$

Even more precisely:

$$(x + y)^n = \displaystyle\sum_{k = 0}^{n} \binom{n}{k} = x^ky^{n - k}$$


---

There is also the ==multinomial coefficient==, which is defined as:

$$\binom{n}{n_1, \ n_2, \ ..., \ k} = \frac{n!}{n_1!  n_2! ... n_k!}$$

One example is to find the number of permutations of length-$n$ word with $n_1$ a's, $n_2$ b's, ..., $n_k$ z's.

Let's look at how we can find the number of ways of rearranging the letters in the word "banana."

The question is, _what is the coefficient of $BA^3N^2$ in the expansion of $(B + A + N)^6$_?

Well, we can write the multinomial coefficient, which will be $\binom{6}{1, \ 3, \ 2}$.

Therefore, $\frac{6!}{1! \cdot 3! \cdot 2!} = \frac{720}{12} = 60$.
