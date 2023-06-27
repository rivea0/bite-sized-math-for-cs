---
layout: layout.njk
tags: [pages, counting]
title: Asymptotics
date: 2023-01-26
eleventyNavigation:
  key: 23. Asymptotics
  order: 26
---

# Asymptotics

We need to measure the behavior of a function $f(n)$ as $n$ grows larger. Here is where asymptotic notation comes to the rescue.

We have already seen a simple ==asymptotic equivalence== example in the previous section to show that $(n^2 + n)$ and $n^2$ are _asymptotically equivalent_, denoted as $(n^2 + n) \sim n^2$. The limit of their quotient goes to $1$, and that's how we determined it.

If a function $f$ is _asymptotically smaller_ than a function $g$, then $f(n)$ is equal to the ==little oh== of $g(x)$: 

$$f(x) = o(g(x))$$

That means, the limit of their quotient should go to $0$ as $x$ approaches infinity:

$$\lim_{x \to \infty} \frac{f(x)}{g(x)} = 0$$

For example, $1000x^{1.9}$ is asymptotically smaller than $x^2$. 

Simplifying $\frac{1000x^{1.9}}{x^2}$, we get $\frac{1000}{x^{0.1}}$.

And, as $x$ approaches infinity, the whole thing approaches $0$:

$$\lim_{x \to \infty} \frac{1000}{x^{0.1}} = 0$$

---

Given that $a$ and $b$ are nonnegative numbers,

$$x^a = o(x^b) \text{ for } a \lt b$$

Let's see.

$$\frac{x^a}{x^b} = \frac{1}{x^{b - a}}$$

$b - a \gt 0$ because of the given definitions: they are nonnegative and $a \lt b$.
Therefore, as $x$ approaches infinity, $\frac{1}{x^{b - a}}$ will approach $0$. That means, $x^a$ is little oh of $x^b$.

---

The star of this show is the ==big oh== notation, which is used to measure _the upper bound on the growth of a function_. In other words, it is to measure _the worst-case scenario_. If a function $f$ is big oh of a function $g$, that is, $f(x) = O(g(x))$, it means that the limit of their quotient as $x$ approaches infinity is finite. **Let $f$ and $g$ be positive, if $\lim_{n \to \infty} \frac{f(x)}{g(x)}$ exists**<span style="color: #7852ee">*</span>, then:

$$\lim_{x \to \infty} \frac{f(x)}{g(x)} \lt \infty$$

An example is that $3n^2 = O(n^2)$:

$$\lim_{n \to \infty} \frac{3n^2}{n^2} = 3$$

$3$ is definitely less than infinity, it is indeed true that $3n^2 = O(n^2)$.


_The definition generally used is with **limit superior**_: 

$$\lim\sup_{x \to \infty} \frac{|f(x)|}{g(x)} \lt \infty$$

Also, note that with big oh, _constant factors don't really matter_.

<span style="color: #7852ee;">*</span><span style="font-size: 16px;">_Definition taken from [Criterion 2 (Finite limit of ratio implies Big Oh)](https://mathwiki.cs.ut.ee/asymptotics/02_big_oh)._</span>

---

When two functions $f$ and $g$ have _the same order of growth_, we can use ==theta==: $f = \Theta(g)$.
It means that, $f = O(g)$ and $g = O(f)$.
It's an equivalence relation.

---

One thing to keep in mind with big oh is that it defines a relation between the growth rates of two functions, not a quantity.
That's why writing it like $O(g) = f$ is risky.

Let's look at an example.
Obviously, $x = O(x)$, and usually with symmetry, we are supposed to be able to write it as $O(x) = x$ as well.
But, $2x$ also has the same upper bound, that is, $2x = O(x)$.
Now, we just wrote that $O(x) = x$, by that reasoning, it must also be that $2x = x$. But, that is certainly false!

So, we can't say something like "a function $f$ is at least $O(n^2)$", because $O(n^2)$ is _not a quantity_, it is a _relation_. 
