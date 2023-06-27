---
layout: layout.njk
tags: [pages, probability]
title: Independence & Causality
date: 2023-02-01
eleventyNavigation:
  key: 29. Independence & Causality
  order: 32
---

# Independence & Causality

==Independent events== are independent; they have nothing to do with each other.

One common misconception is when flipping a coin: if you got tails the first five times, are you more likely to get tails the sixth time? 
Well, the answer is, of course not. Each flip is an independent event.

If it's hard to see why, imagine that after you flipped the coin the fifth time, you put it in a box, and don't open that box for years. After a long time, you finally open the box and flip the coin. Now, does it make sense that it's more likely to get tails? Hopefully not. The coin doesn't remember anything, you can try asking it. Although, that would be weird.

Let's define it better:

$$\text{Pr}[A] = \text{Pr}[A \ | \ B]$$

So, the fact that $B$ happened doesn't affect the probability of $A$.

Another definition is:
$$\text{Pr}[A] \cdot \text{Pr}[B] = \text{Pr}[A \cap B]$$

That means $A$ and $B$ are independent events. This is called the [==product rule==](https://brilliant.org/wiki/probability-rule-of-product/). So, the _two events are equivalent if the product of their probabilities is equal to the probability that they both happen_ (which is their intersection).

We stated that $\text{Pr}[A] = \text{Pr}[A \ | \ B]$, but let's prove that.

> By the product rule, we can write $\text{Pr}[A]$ as $\frac{\text{Pr}[A \cap B]}{\text{Pr}[B]}$.
> 
> Well, we know that is just conditional probability: $\text{Pr}[A \ | \ B] = \frac{\text{Pr}[A \cap B]}{\text{Pr}[B]}$.
> 
> Therefore, $\text{Pr}[A] = \text{Pr}[A \ | \ B]. \ \ \blacksquare$


Another way to see that is with just plugging in the definitions.
For example, remember that the difference rule says that $\text{Pr}[A - B] = \text{Pr}[A] - \text{Pr}[A \cap B]$.
**So, we can write $\text{Pr}[A]$ as $\text{Pr}[A \cap B] + \text{Pr}[A - B]$**

Also, by the difference rule, **$\text{Pr}[A \cap B]$ can be written as $\text{Pr}[A] - \text{Pr}[A - B]$.**

We want to prove that $\text{Pr}[A] = \text{Pr}[A \ | \ B]$.

Substituting $\text{Pr}[A]$ with $\text{Pr}[A \cap B] + \text{Pr}[A - B]$, we have:

$$\text{Pr}[A \cap B] + \text{Pr}[A - B] = \text{Pr}[A \ | \ B]$$

Substituting $\text{Pr}[A \cap B]$ with $\text{Pr}[A] - \text{Pr}[A - B]$, we have:

$$\text{Pr}[A] - \text{Pr}[A - B] + \text{Pr}[A - B] = \text{Pr}[A \ | \ B]$$

$$= \text{Pr}[A] = \text{Pr}[A \ | \ B] \ \ \blacksquare$$

It's just a long-winded of saying the same thing, the point is that the math, of course, works.

---

Independent events are not just for two events. When there are more independent events, it is called ==mutual independence==.

So, if we have events $A_1, \ A_2, \ ..., \ A_n$, they are mutually independent when the probability of one of them ($A_i$) occurs is unchanged by the probability of other ones occurring.

Formally:

$$\text{Pr}[A_i] = \text{Pr}[A_i \ | \ A_j \cap A_k \cap \ ... \ \cap A_m] \ \ (i \neq j, \ k, \ ..., \ m)$$

The second definition we used previously for two independent events looks like this for mutual independence:

$$\text{Pr}[A_i \cap A_j \cap \ ... \ \cap A_m = \text{Pr}[A_i] \cdot \text{Pr}[A_j] \cdot \ ... \ \cdot \text{Pr}[A_m]$$

The simplest example for mutual independence is the flipping a coin example we mentioned. You can flip a million times, and none of them depends on the others.

---

> A set $A_1, \ A_2, \ ...$, of events is ==k-way independent== iff every set of $k$ of those events is mutually independent. The set is ==pairwise independent== iff it is 2-way independent.


So, when we have a set of random variables in which any two of them are independent, it is called _pairwise independent_.

Let's look at [an example](http://mnstats.morris.umn.edu/introstat/stat2611/independence.html).
Imagine we have a box that has four tickets with labels: **112**, **121**, **211**, and **222**.

Let $A_1$ be the event that 1 occurs at the first place.
Let $A_2$ be the event that 1 occurs at the second place.
Let $A_3$ be the event that 1 occurs at the third place.

The probability of each of these events is $\frac{1}{2}$: 
$\text{Pr}[A_1] = \frac{1}{2}$, $\text{Pr}[A_2] = \frac{1}{2}$, $\text{Pr}[A_3] = \frac{1}{2}$

We choose one ticket at random.

Remember that we defined independence as $\text{Pr}[A] \cdot \text{Pr}[B] = \text{Pr}[A \cap B]$.

The intersection of $A_1$ and $A_2$ ($A_1 \cap A_2$) is **112**. 
The probability of choosing **112** ($\text{Pr}[A_1 \cap A_2]$) is $\frac{1}{4}$, which is $\frac{1}{2} \cdot \frac{1}{2}$, which is $A_1 \cdot A_2$.

It is the same for other pairings as well:
$A_1 \cap A_3$ = **121**. $\text{Pr}[A_1 \cap A_3] = \frac{1}{4}$.
$A_2 \cap A_3$ = **211**. $\text{Pr}[A_2 \cap A_3] = \frac{1}{4}$.

So, $A_1$, $A_2$, and $A_3$ are pairwise independent.

