---
layout: layout.njk
tags: [pages, probability]
title: Random Variables, Density Functions
date: 2023-02-02
eleventyNavigation:
  key: 30. Random Variables, Density Functions
  order: 33
---

# Random Variables, Density Functions

A ==random variable== $R$ is formally defined as:
$$R: S \rightarrow \mathbb{R}$$

So, it is not a _variable_, but a _function_ that maps outcomes in sample space ($S$) to real numbers.

One simple example is getting a tail when flipping a coin. It has a 50% chance, and is random.

$R$ is _a package of events_ ($R = a$, for $a \in \mathbb{R}$). Then the event properties that we have seen until now apply to random variables as well.
For example, random variables $R_1, \ R_2, \ ..., \ R_n$ are mutually independent iff the events that they define $[R_1 = a_1], \ [R_2 = a_2], \ ..., \ [R_n = a_n]$ are mutually independent for all $a_1, \ a_2, \ ..., \ a_n$.

Say, we flip a coin three times, and we define getting all tails as a _match_, which we can denote as $M$. So, if we get tails three times, it is a match, so $M = 1$. If we don't get all tails, it is not a match, so $M = 0$.
This is a simple example that a random variable is a package of events, in this case, $M$ is our random variable.
It is also what is called the ==indicator variable==.

An indicator variable $I$ for event $A$ is:

$$
I_A =
\begin{cases}
1 & \text{if } A \text{ occurs,}\\
0 & \text{if  } A \text{ does not occur.}
\end{cases}
$$

---

Let's look at some types of random variables.

A ==uniform random variable== is when it takes values with equal probability.
An example is the outcome of rolling a fair die. The probability of each number is $\frac{1}{6}$.

Another is ==binomial random variable==. An example is what we get when we flip $n$ mutually independent coins (or, flipping it $n$ times). Let's assume that our coin is not fair this time, so for example, the probability of getting a head is $\frac{2}{3}$.

Let's say that we flip the coin 5 times, and want to know the probability of getting HHTTH.
Since, the probability of getting a head is $\frac{2}{3}$, the probability of getting a tail is going to be $\frac{1}{3}$. 
So, the probability of getting HHTTH will be $\frac{2}{3} \cdot \frac{2}{3} \cdot \frac{1}{3} \cdot \frac{1}{3} \cdot \frac{2}{3}$.
Put it another way, $\text{Pr}[\text{HHTTH}] = \big(\frac{2}{3}\big)^{3} \cdot \big(\frac{1}{3}\big)^{2}$.
This is also true not just this one sequence, but for each sequence with $i$ heads, and $n - i$ tails ($n$ being the total number of flips).
Let $p$ denote $\text{Pr}[\text{head}]$, then the formula is: 

$$p^i \cdot (1 - p)^{n - i}$$

It is _the probability of a sequence of $n$ flips in which there are $i$ heads and $n - i$ tails._
(Any particular sequence of H's and T's of length $n$.)

So, _all sequences with the same number of H's will have the same probability._

Then, what is the probability of actually getting $i$ heads and $n - i$ tails in the $n$ flips? 
It is simply the matter of _choosing $i$ heads from $n$ number of flips_. Which sounds like _n choose i_.

So, the probability of choosing $i$ heads and $n - i$ tails is:

$$\binom{n}{i} \ p^i \ (1 - p)^{n - i}$$

---

_==Probability Density Function== tells what's the probability that a random variable takes a given value for every possible value._

For each $a$, it is the possibility of $R$ equals $a$: 

$$PDF_R(a) = \text{Pr}[R = a]$$

For example, let's think about the binomial random variable example we've just used. $i$ ($i$ = the number of heads) is an integer from $0$ to $n$ ($n$ = the number of flips). Of all the possible $i$'s, the probability that the random variable equals $i$ (choosing $i$ heads) will be equal to that formula:

$$PDF_{B_{n, p}} (i) = \binom{n}{i} \ p^i \ (1 - p)^{n - i}$$

($B_{n, p}$ is the binomial random variable that has the parameters $n$ and $p$ — $n$ as the number of flips, $p$ as the probability of getting head).

The probability density function of a uniform variable will be a constant. Probability of it taking any possible value $v$ is the same: $PDF_U(v) = \text{constant}$.

Of course, it is in the range of $U$ (the range that the uniform variable takes on a value): 

$$PDF_U(v) = \frac{1}{|\text{range}(U)|}$$

---

There is also the ==cumulative distribution function==, defining the probability of $R$ being less than or equal to $a$: 

$$CDF_R(a) = \text{Pr}[R \leq a]$$

An example is from the practice exercises:
> Let $X$ be a uniformly distributed random variable on the interval $[1,12]$. What is the value of the Cumulative Distribution Function (CDF) at $8$?

Since $X$ is a uniformly distributed random variable, $PDF_X(x) = \frac{1}{12}$ for $x \in [1, \ 12]$.
We are looking for the probability of $R$ being less than or equal to $8$, so from $1$ to $12$, the first $8$ values satisfy it: $\frac{8}{12} = \frac{2}{3}$.
