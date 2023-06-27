---
layout: layout.njk
tags: [pages, counting]
title: Sums & Products
date: 2023-01-25
eleventyNavigation:
  key: 22. Sums & Products
  order: 25
---

# Sums & Products

Alright, let's start with ==arithmetic sums==:

$$A = \frac{\text{ first term } + \text{ last term }}{2} \cdot \text{ number of terms }$$


The sum of the first $n$ integers ($1 + 2 + ... + (n - 1) + n$) is:

$$\frac{n(1 + n)}{2}$$

Why?

Say that we are looking for the sum of numbers from 1 to 5. What we are looking for is the answer to $1 + 2 + 3 + 4 + 5$. 

There is a constant amount of difference between each term, which is $1$. The difference between $2$ and $1$ is $1$, between $3$ and $2$ is $1$, and so on.
That means, we can write it as 

$$1 + (1 + 1) + ... + (5 - 1) + 5$$

Let's use $F$ to stand for our first term $1$, and $L$ to stand for our last term $5$. We can also use $d$ for the difference between terms, which is $1$.
$A$ is for the arithmetic sum, of course.

Then, we can write it as 

$$A = F + (F + d) + ... + (L - d) + L$$

Addition is commutative, we can reverse the order of the terms:

$$A = L + (L - d) + ... + (F + d) + F$$

Let's add those two together, and see what we have, because why not:

$A = F + (F + d) + ... + (L - d) + L$
$A = L + (L - d) + ... + (F + d) + F$
$\underline{\quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad +}$
$2A = (F + L) + (F + L) + ... + (F + L)$


If you didn't catch it, $d$'s are canceling out. And, what we have is 

$$2A = (F + L) \cdot \text{ the number of terms }$$ 

Dividing by $2$ to find $A$, we get what we have started with: 

$$A = \frac{F + L}{2} \cdot n$$

Substituting our first and last terms, clearly we have $\frac{1 + n}{2} \cdot n$. We can also write it as 

$$\frac{n(1 + n)}{2}$$

---

With ==geometric sums==, each sum is a multiple of the previous sum.

So, $G_n = 1 + x + x^2 + ... + x^n$.

The formula we have to find that is this:

$$\frac{1 - x^{n + 1}}{1 - x}$$

Again, why?

Let's use another trick, different from the one we used for arithmetic sums.

This time let's multiply $G_n$ by $x$. This will increase the power of $x$ in each term:

$$xG_n = x + x^2 + x^3 + ... x^{n + 1}$$

Let's subtract it from the original $G_n$, because again, why not:

$G_n = 1 + x + x^2 + ... + x^n$
$-xG_n = -x -x^2 -x^3 - ... x^{n + 1}$
$\underline{\quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad -}$
$G_n - xG_n = 1 - x^{n + 1}$

What we end up having is 

$$G_n - xG_n = 1 - x^{n + 1}$$

We can factor $G_n$ out to have: 

$$G_n (1 - x) = 1 - x^{n + 1}$$

That means, $G_n$ is 

$$\frac{1 - x^{n + 1}}{1 - x}$$ 

---

We had simple formulas for arithmetic and geometric sums, but this time, we'll look at a formula that can give an estimation.

Let $f : \mathbb{R}^+ \rightarrow \mathbb{R}^+$ be a weakly increasing function.

The sum is:

$$S = \displaystyle\sum_{i = 1}^n f(i)$$


Think of each term as a unit-width ($i$) rectangle, with a height of $f(i)$.
Then, the number for the sum we are looking for has to be the total area under the curve of $f(x)$.

The area under the curve $f(x)$ from $1$ to $n$ is:


$$I = \int_{1}^{n} f(x) \ dx$$

Then:

$$I + f(1) \leq S \leq I + f(n)$$

Perhaps it would make more sense visually:

<img src={{ "../images/sums1.png" | url }} alt="Sums1" width="50%">

And, shift it left by $1$:

<img src={{ "../images/sums2.png" | url }} alt="Sums2" width="50%">

<p style="font-size: smaller; margin-bottom: 0;"><i>Figures 13.2 and 13.3 from the course notes <a href="https://openlearninglibrary.mit.edu/assets/courseware/v1/4fb79a8b271d75485a489411764ef691/asset-v1:OCW+6.042J+2T2019+type@asset+block/MIT6_042JS15_Session23.pdf">Mathematics for Computer Science</a>.</i></p>

---

> Any product can be converted into a sum by taking its logarithm.

Let's look at a factorial, for example, $n!$ is $1 \cdot 2 \cdot 3 \cdot \ ... \ \cdot (n - 1) \cdot n$.

We can also denote it as: 

$$\displaystyle\prod_{i = 1}^n i$$
It can be turned into a sum by taking the logarithm:

$$\displaystyle\sum_{i = 1}^n ln(i)$$

  It is because of the [product rule](https://en.wikipedia.org/wiki/Logarithm#Characterization_by_the_product_formula):

$$ln(n!) = ln(1 \cdot 2 \cdot 3 \cdot \ ... \ \cdot (n - 1) \cdot n)$$
$$ = ln(1) + ln(2) + ln(3) + \ ... \ + ln(n - 1) + ln(n)$$
$$ = \displaystyle\sum_{i = 1}^n ln(i)$$
We have to estimate this sum to get a closed-form bound.
In order to do that, we are going to use the formula we defined above: $I + f(1) \leq S \leq I + f(n)$.

So, plugging them in:

$$\bigg(\int_{1}^{n} ln(x) \ dx\bigg) + ln(1) \leq \displaystyle\sum_{i = 1}^n ln(i) \leq \bigg(\int_{1}^{n} ln(x) \ dx\bigg) + ln(n)$$

Looks beautiful.

$ln(1)$ is $0$. So, it is just 

$$\int_{1}^{n} ln(x) \ dx \leq \displaystyle\sum_{i = 1}^n ln(i) \leq \bigg(\int_{1}^{n} ln(x) \ dx\bigg) + ln(n)$$

After taking the integral, and exponentiating the whole thing (it was the product, remember, we are undoing it), the eventual result will be, [according to the book](https://openlearninglibrary.mit.edu/assets/courseware/v1/4fb79a8b271d75485a489411764ef691/asset-v1:OCW+6.042J+2T2019+type@asset+block/MIT6_042JS15_Session23.pdf):

$$\frac{n^n}{e^{n - 1}} \leq n! \leq \frac{n^{n + 1}}{e^{n - 1}}$$

---

One example of ==asymptotic equivalence== is $(n^2 + n) \sim n^2$.

In order for two functions to be asymptotically equal, _the limit of their quotient has to go to $1$ as $n$ approaches infinity_. Let's see.

$$\lim_{n \to \infty} \frac{n^2 + n}{n^2} = \lim_{n \to \infty} \bigg(1 + \frac{1}{n}\bigg) = 1$$
So, simplifying $\frac{n^2 + n}{n ^2}$ we have $1 + \frac{1}{n}$. As $n$ goes to $\infty$, $\frac{1}{n}$ goes to $0$, so we're left with $1$. And, that proves that $(n^2 + n)$ and $n^2$ are asymptotically equal.
