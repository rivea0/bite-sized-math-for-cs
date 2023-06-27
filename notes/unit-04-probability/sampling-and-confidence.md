---
layout: layout.njk
tags: [pages, probability]
title: Sampling & Confidence
date: 2023-02-05
eleventyNavigation:
  key: 33. Sampling & Confidence
  order: 36
---

# Sampling & Confidence

Take a random variable $R$ with an expectation of $\mu$.
Make $n$ _trial observations_ of $R$, and take the average of those observations.
See how close they are to $\mu$.

_The observed average of the results will approach the true expectation as the number of trial observations increases._

So, we're doing $n$ observations of $R$. They are mutually independent:
$R_1, \ R_2, \ ..., \ R_n$

They all have the same expectation $\mu$.

Taking the average of those values: $A_n = \frac{R_1 \ + \ R_2 \ + \ ... \ + \ R_n}{n}$ 
Is this average value close to $\mu$ if $n$ is big?

$\lim_\infty \ \text{Pr}[|A_n - \mu| \leq \delta] = \ ?$

The answer that the ==Weak Law of Large Numbers== gives to that question is $1$:
$$\lim_\infty \ \text{Pr}[|A_n - \mu| \leq \delta] = \ 1$$

Another way of saying it is:
$$\lim_\infty \ \text{Pr}[|A_n - \mu| \gt \delta] = \ 0$$

So, as the number of trials increases, the probability that _the average differs from the expectation more than delta_ goes to $0$.

_As the number of trials increases, the difference between the observed average and the theoretical average gets smaller._

<span style="font-size: 18px;">For a clear example to understand the concept of the Law of Large Numbers, [The Organic Chemistry Tutor's video](https://www.youtube.com/watch?v=ihTpK6dXSas) is really great.</span>

---

Let $R_1, \ R_2, \ ..., \ R_n$ be pairwise independent random variables with same mean $\mu$ and variance $\sigma^2$. 
Their average $A_n$ is $\frac{R_1 \ + \ R_2 \ + \ ... \ + \ R_n}{n}$.

So, _the probability that their average differs from the mean by more than a given tolerance delta_ is:

$$\text{Pr}[|A_n - \mu| \gt \delta] \leq \frac{1}{n}\bigg(\frac{\sigma}{\delta}\bigg)^2$$

It is the ==Pairwise Independent Sampling Theorem==. 

---

> _Confidence levels_ refer to the results of estimation procedures for real-world quantities.

So, when some facts are told to have high confidence level, the important thing to remember is that _behind this claim, a random experiment lies_.

[_95% confidence level is most common_](https://imgs.xkcd.com/comics/significant.png), and as mentioned in the course video, [this xkcd comic](https://xkcd.com/882/) illustrates the topic:

![xkcd 882](https://imgs.xkcd.com/comics/significant.png)
