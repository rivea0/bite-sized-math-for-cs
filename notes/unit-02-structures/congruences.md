---
layout: layout.njk
tags: [pages, structures]
title: Congruences
date: 2023-01-15
eleventyNavigation:
  key: 12. Congruences
  order: 15
---

# Congruences

Take two integers $a$ and $b$.

The notion of _congruence_ is defined as: 

$$a \equiv b \ (\text{mod } n) \text{ iff } n | (a - b)$$

where $n$ is considered to be greater than $1$.

So, $a$ is congruent to $b$ $\text{mod }n$ iff $n$ divides $a - b$.

A simple example: $29 \equiv 15 \ (\text{mod }7)$. $29 - 15$ is $14$, and $7 | 14$.

Let's look at a more interesting one:
$66666663 \equiv 788253 \ (\text{mod }10)$.

Both numbers have $3$ in their units place, and because the result of their subtraction has $0$ in its units place, it is divisible by $10$.

We can see that this is also true:
$$a \equiv b \ (\text{mod } n) \text{ iff } \text{rem}(a, \ n) = \text{rem}(b, \ n)$$

So, $a$ is congruent to $b$ iff both have the same remainder when divided by $n$.

Applied to the first example, we have $29 \equiv 15 \ (\text{mod } 7)$ iff $\text{rem}(29, \ 7) = \text{rem}(15, \ 7)$. It is true because $\text{rem}(29, \ 7)$ is $1$, and $\text{rem}(15, \ 7)$ is also $1$. Since they are equal to each other, $29 \equiv 15 \ (\text{mod } 7)$.

---

There are some [basic properties of congruences](https://sites.math.washington.edu/~greenber/Congruences.pdf):

| | |
--- | --- 
_Reflexive Property_ | $a \equiv a \ (\text{mod }n)$
_Symmetric Property_ | $a \equiv b \ (\text{mod }n) \implies b \equiv a \ (\text{mod }n)$
_Transitive Property_ | $a \equiv b \ (\text{mod }n) \land b \equiv c \ (\text{mod }n) \implies a \equiv c \ (\text{mod }n)$

---

A number is congruent to its own remainder $\text{mod }n$:

$$a \equiv \text{rem}(a, \ n) \ \ (\text{mod }n)$$

Why is that?

We can see that $a$ and the remainder of $a$ have the same remainder by taking the remainder of both sides:

$$\text{rem}(a, \ n) \equiv \text{rem}(\text{rem}(a, \ n), \ n) \ \ (\text{mod }n)$$

Let's look at it with an example:

| |
| :--- |
| Let's say that $a$ is $7$, and $n$ is $2$. |
| $7 \equiv \text{rem}(7, \ 2) \ \ (\text{mod } 2)$, so $7 \equiv 1 \ \ (\text{mod } 2)$. |
| Taking the remainder of both sides: $\text{rem}(7, \ 2) \equiv \text{rem}(\text{rem}(7, \ 2), \ 2) \ \ (\text{mod }2)$. |
| $1 \equiv \text{rem}(1, \ 2) \ \ (\text{mod }2)$. |
| And, finally, $1 \equiv 1 \ \ (\text{mod }2)$. |

One point to remember is that the remainder is between $0$ and $n$: ==$0 \leq \text{rem}(a, \ n) \lt n$==.

---

If $a \equiv b \ \ \text{mod}(n)$, then $a + c \equiv b + c\ \ \text{mod}(n)$.
And, why is that?
Since $n$ divides $a - b$, it will also divide $(a + c) - (b + c)$:

$$n \ | \ (a - b) \implies n \ | \ ((a + c) - (b + c))$$

If $a \equiv b \ \ \text{mod}(n)$, then $a \cdot c \equiv b \cdot c\ \ \text{mod}(n)$.
And, why is that again? 
Since $n$ divides $a - b$, it will also divide $(a \cdot c) - (b \cdot c)$:

$$n \ | \ (a - b) \implies n \ | \ (a - b) \cdot c$$
Therefore, 

$$n \ | \ ((a \cdot c) - (b \cdot c))$$


That seems like ordinary arithmetic so far. But, let's take a look at an example:
$8 \cdot 2 \equiv 3 \cdot 2 \ \ \text{mod}(10)$

If you want to cancel the $2$'s, guess what? You can't: 
$8 \not\equiv 3 \ \ \text{mod}(10)$

Then, when can we cancel $k$?

The answer is _when it has no common factors with $n$_. In other words, $\text{gcd}(k, \ n) = 1$.

In order to cancel something, we have to have its inverse, a trivial example is $\frac{1}{2} \cdot 2$, we can cancel the $2$'s and get the result of $1$.

Now, let's say that $k'$ is an inverse of $k \ \ \text{mod}(n)$:
$k' \cdot k \equiv 1 \ \ \text{mod}(n)$

We can think of $k'$ as an integer that acts like $\frac{1}{k}$.

What we know is that if $\text{gcd}(k, \ n) = 1$, that means we have a linear combination of $k$ and $n$ which is also $1$: $sk + tn = 1$.

Since $sk + tn$ and $1$ are equal, they are congruent to each other $\text{mod}(n)$:
$sk + tn \equiv 1 \ \ \text{mod}(n)$

$n$ is congruent to $0 \ \ \text{mod}(n)$, so we can write it as such:
$sk + t0 \equiv 1 \ \ \text{mod}(n)$

Then, what we're left with is this:
$sk \equiv 1 \ \ \text{mod}(n)$

And, that means $s$ is an inverse of $k$.

So, $s$ was indeed the inverse of $k$ all along, it is $k'$!

---

There is another way to cancel $k$ if it's relatively prime to $n$:

If $a \cdot k \equiv b \cdot k \ \ \text{mod}(n)$ and $\text{gcd}(k, \ n) = 1$, then we can multiply it by the inverse:

$(a \cdot k)k' \equiv (b \cdot k)k' \ \ \text{mod}(n)$

Reorganize it a bit:
$a \cdot (k \cdot k') \equiv b \cdot (k \cdot k') \ \ \text{mod}(n)$

Which means:
$a \cdot 1 \equiv b \cdot 1 \ \ \text{mod}(n)$

Therefore: 
$a \equiv b \ \ \text{mod}(n)$

The point is that _$k$ is cancellable $\text{mod}(n)$ iff $k$ has an inverse $\text{mod}(n)$ iff $\text{gcd}(k, \ n) = 1$_.

In other words, $k$ is cancellable iff $k$ is relatively prime to $n$.
