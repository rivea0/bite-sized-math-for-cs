---
layout: layout.njk
tags: [pages, structures]
title: Euler's Theorem
date: 2023-01-16
eleventyNavigation:
  key: 13. Euler's Theorem
  order: 16
---

# Euler's Theorem

We're going to briefly look at [Euler's totient function](https://en.wikipedia.org/wiki/Euler%27s_totient_function), $\phi(n)$.

It is defined as:

For $n \gt 0$, 
$$\phi(n) = \text{the number of integers in } [0, \ n), \text{ that are relatively prime to } n$$

_Note: We can also use the interval $(0, \ n)$ because $0$ is not relatively prime to anything._

In other words, $\phi(n)$ is the number of all positive integers up to $n$ that are relatively prime to $n$.

We can also say that if $k$ and $n$ are relatively prime, then $\text{gcd}(k, \ n) = 1$.
As we've seen in the [previous section](bite-sized-math-for-cs/unit-02-structures/congruences), it also means that it'll be the numbers that have inverses and are cancellable $\text{mod}(n)$.

Let's call this set $\mathbb{Z}^*_n$, and write it as: $\{k \in [0, \ n) \ | \ \text{gcd}(k, \ n) = 1\}$.

Then, $\phi(n) = |\mathbb{Z}^*_n|$.

A simple example is $\phi(7) = 6$. 
All $6$ positive integers up to $7$ ($\{1, \ 2, \ 3, \ 4, \ 5, \ 6\}$) are relatively prime to $7$.
Another example is $\phi(12) = 4$. All positive integers that are relatively prime to $12$ in that interval are $1, \ 5, \ 7$, and $11$.

---

If $p$ is prime, everything in $[1, \ p)$ is relatively prime to $p$. 
Therefore, when $p$ is prime, $\phi(p) = p - 1$, as we've seen with $\phi(7) = 6$.

Let's look at another example, $\phi(9)$.
We can also write it as _a power of a prime_, $\phi(3^2)$.

Here is the reasoning: a number is relatively prime to $9$ iff it is relatively prime to $3$. Because $3$ divides _every third number_ in that interval ($1$, $2$, _**3**_, $4$, $5$, _**6**_, $7$, $8$), every third number will _not_ be relatively prime to $9$.
So, it will be the set of all numbers minus $\frac{1}{3}$ of $9$:
$\phi(9) = 9 - 9(\frac{1}{3}) = 6$.

We can generalize, and say that $\frac{p^k}{p}$ of the numbers in that interval will **not** be relatively prime to $p^k$.
Therefore, $\phi(p^k) = p^k - \frac{p^k}{p}$.
To write it more simply: 

$$\phi(p^k) = p^k - p^{k - 1}$$


What if the number we're dealing with is not a power of a prime, like $12$ as we've just seen?

One fact is that if $a$ and $b$ are relatively prime, then 

$$\phi(ab) = \phi(a)\phi(b)$$

This is called ==multiplicativity==; _a function is multiplicative when its value at a product of relatively prime numbers is the product of the values at those two relatively prime numbers_. 
Again, if English is confusing, here is the same thing put more precisely: $f(ab) = f(a) f(b)$.

That means $\phi$ is a multiplicative function.

Okay, let's go back to $\phi(12)$. We can now write it as $\phi(3 \cdot 4)$. That also means, $\phi(12) = \phi(3) \cdot \phi(4)$.
Our job is easy, $3$ is a prime already, and we can write $4$ as a power of a prime, $2^2$.
If we use the formulas we've just seen, then we can write the whole thing as:
$(3 - 1) \cdot (2^2 - 2^{2 - 1})$.
That means $2 \cdot (4 - 2)$, which is $4$.
So, $\phi(12) = 4$ — the size of the set $\{1, \ 5, \ 7, \ 11\}$. And, we're done.

Isn't it elegant?

So, to summarize, aside from $\phi(p) = p - 1$ when $p$ is a prime, we've seen two other rules:

> _If $p$ is a prime, then_ 
> $$\phi(p^k) = p^k - p^{k-1} \text{ for } k \geq 1$$


> _If $a$ and $b$ are relatively prime, then_ 
> $$\phi(ab) = \phi(a)\phi(b)$$

---

Let's look at a wonderful thing.

We used $\phi(7)$ example, the result was $6$ as it was the size of the set of those that are relatively prime to $7$: $\{1, \ 2, \ 3, \ 4, \ 5, \ 6\}$.

We called this set $\mathbb{Z}^*_n$. 
Now, if we take any number $k$ from $\mathbb{Z}^*_n$, and multiply it by each number in $\mathbb{Z}^*_n$, we'll still get the same set ($\text{mod }n$), but in a different order:

$$\mathbb{Z}^*_n = k \mathbb{Z}^*_n \text{ for } k \in \mathbb{Z}^*_n$$

So, in our example, $\mathbb{Z}^*_7$ is $\{1, \ 2, \ 3, \ 4, \ 5, \ 6\}$.
Let's pick any $k$, for example, $5$.
Multiplying each item in $\mathbb{Z}^*_7$, we have $\{5, \ 10, \ 15, \ 20, \ 25, \ 30\}$, and of course, since it has to be in $\text{mod}(7)$, it is the set $\{5, \ 3, \ 1, \ 6, \ 4, \ 2\}$. It is the same set!

We can try it with a different number in the set, say $2$.
This time we have $\{2, \ 4, \ 6, \ 8, \ 10, \ 12\}$, and since this is $\mathbb{Z}^*_7$, it is $\{2, \ 4, \ 6, \ 1, \ 3, \ 5\}$. The same set again!

---

In terms of congruence, we can also say that if $k$ and $n$ are relatively prime, then:

$$k^{\phi(n)} \equiv 1 \ \ \ \text{mod}(n)$$

Let's say that $k$ is $2$, and $n$ is $5$.

$2^{\phi(5)} \equiv 1 \ \ \ \text{mod}(5)$

Those that are relatively prime to $5$ less than $5$ is the set $\{1, \ 2, \ 3, \ 4\}$. Its size is $4$, so $\phi(5) = 4$:

$2^4 \equiv 1 \ \ \ \text{mod}(5)$

And, it is correct:

$16  \equiv 1 \ \ \ \text{mod}(5)$

---
_Fermat's Little Theorem_ states,

$$k^{p - 1} \equiv 1 \ \ \text{mod}(p)$$

So, for example, the remainder of dividing $24^{78}$ by $79$ will be $1$ — that is, $\text{rem}(24^{78}, \ 79) = 1$, or $24^{78} \equiv 1 \ \ \text{mod}(79)$.

---

For primes $p$ and $q$, 

$$\phi(pq) = (p - 1)(q - 1) \text{ for primes } p \neq q$$

A simple example, let's say $p$ is $2$, and $q$ is $5$.
So, this has to be true: $\phi(10) = 1 \cdot 4$.

The set of those relatively prime to $10$ that are less than $10$ is $\{1, \ 3, \ 7, \ 9\}$. 
Indeed, $\phi(10) = 4$.

---
An example. We're asked 
> How many numbers between $1$ and $3780$ (inclusive) are relatively prime to $3780$?

We know that $3780$ is not a prime. One thing to do is to either write $3780$ as a power of a prime, or write it as the product of two numbers that are relatively prime.
We can write it as the product of $7$ and $540$.
Then, we can solve this using the `gcd` function we used before, and newly defined `ring` and `phi` functions:

```python
def gcd(x, y):
    if y == 0:
        return x
    return gcd(y, x % y)


def ring(n):
    return [i for i in range(1, n) if gcd(i, n) == 1]


def phi(n):
    return len(ring(n))


a = 7
b = 540

print(phi(a) * phi(b)) # -> Answer: 864
```

The answer is indeed $864$.
