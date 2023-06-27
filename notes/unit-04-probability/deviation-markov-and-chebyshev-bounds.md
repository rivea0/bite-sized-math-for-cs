---
layout: layout.njk
tags: [pages, probability]
title: "Deviation: Markov & Chebyshev Bounds"
date: 2023-02-04
eleventyNavigation:
  key: "32. Deviation: Markov & Chebyshev Bounds"
  order: 35
---

# Deviation: Markov & Chebyshev Bounds

The main focus in this section is _finding the probability that an estimate deviates by a given amount from its expected value_.

The mean, or, _the expectation_, is not always good enough to predict a random variable's behavior.

When a random variable takes a value much larger than its mean, its probability can be estimated with ==Markov's theorem==.

If $R$ is nonnegative, then for all $x \gt 0$:

$$\text{Pr}[R \geq x] \leq \frac{E[R]}{x}$$

The example given in the lectures is the disputable IQ score. The average IQ is said to be 100, and this means that only a $\frac{1}{3}$ of a population can have an IQ of 300:
$\frac{1}{3} \cdot 300 = 100$.
Because if it were more than $\frac{1}{3}$, average would have to be more than 100.

So, the probability of having an IQ of 300 is less than or equal to the expectation divided by 300:
$\text{Pr}[\text{IQ} \geq 300] \leq \frac{E[\text{IQ}]}{300}$.

The average (the expectation) is 100, so:

$\text{Pr}[\text{IQ} \geq 300] \leq \frac{100}{300} = \frac{1}{3}$.

_As the factor of expectation increases, the probability decreases proportionally_.

If we are given that IQ score is always more than or equal to 50, we can get a better bound by adjusting the formula a little, namely, _shifting $R$ to have $0$ as minimum_.

So, in that case, it would look like:

$\text{Pr}[\text{IQ} - 50 \geq 300 - 50] \leq \frac{100 - 50}{300 - 50} = \frac{1}{5}$.

---

Another example is from the [Rice University's lecture notes](https://cs.rice.edu/~as143/COMP480_580_Fall22/scribe/Lec3.pdf):

> Assume the expected time it takes Algorithm A to traverse a graph with $n$ nodes is $2n$. What is the probability that the algorithm takes more than 10 times that?

Since we're looking for the outcome that is 10 times more than the expectation:

$\text{Pr}[R \geq 10 \cdot E[R]] \leq \frac{E[R]}{10 \cdot E[R]} = \frac{1}{10}$

So, the probability is not more than $0.10$.

---

Another example from the practice exercises:

> Given a random variable $R$ with $E[R] = 50$, give the smallest value $x$ such that the Markov Bound guarantees $\text{Pr}[R \geq x] \leq 0.5$ if $R$ is nonnegative.

Well, in this case, we have $\text{Pr}[R \geq x] \leq \frac{50}{x} = 0.5$. Then, $x$ is $100$ ($\frac{50}{0.5} = 100$).

---

_The ==Chebyshev bound== says that the probability that the distance between $R$ and its mean is greater than or equal to $x$ is the variance of $R$ divided by $x^2$_.

The term ==variance== stands out, it is the expectation of the square of the distance between $R$ and its mean, that is $R - E[R]$: 

$$E[\big(R - E[R]\big)^2]$$

Let's call it $\text{Var}[R]$. 

So, the Chebyshev bound is:

$$\text{Pr}[|R - E[R]| \geq x] \leq \frac{\text{Var}[R]}{x^2}$$

---

The square root of variance is the ==standard deviation==, denoted by $\sigma$:

$$\sigma_R = \sqrt{\text{Var}[R]}$$

Now, let $\mu$ denote the expectation of $R$, $E[R]$. The Chebyshev bound can then be restated as:

$$\text{Pr}[|R - \mu| \geq x] \leq \frac{\sigma_R^2}{x^2}$$
