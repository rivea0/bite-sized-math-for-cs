---
layout: layout.njk
tags: [pages, structures]
title: GCDs
date: 2023-01-14
eleventyNavigation:
  key: 11. GCDs
  order: 14
---

# GCDs

Let's start off with what we know about divisibility:

> $a$ divides $b$ ($a \ | \ b$) iff there is an integer $k$ such that $ak = b$.

Then, we know that for all $n$,
- $n \ | \ n$
- $n \ | \ 0$
- $\pm1 \ | \ n$ 
To put it crudely, we can say that everything is a divisor of itself, everything divides $0$, and $\pm 1$ divides everything.

We also know some basic facts about divisibility:
- If $a \ | \ b$ and $b \ | \ c$, then $a \ | \ c$.
- If $a \ | \ b$ and $a \ | \ c$, then $a \ | \ sb + tc$ for all $s$ and $t$.
- For all $c \neq 0$, $a \ | \ b$ iff $ca \ | \ cb$.

_Note_: The number of the form $sb + tc$ is called the ==linear combination== of $b$ and $c$.

---

As long as $a$ and $b$ are not $0$, they will have their ==greatest common divisor==, and we can write it as $\text{gcd}(a, b)$.

### Euclid's Algorithm
We can find $\text{gcd}$s with Euclid's Algorithm:

For $b \neq 0$,

$$\text{gcd}(a, \ b) = \text{gcd}(b, \text{rem}(a, \ b))$$

Okay, we know that $a = bq + r$, where $q$ is the _quotient_, and $r$ is the _remainder_. Notice that $r$ is $0$ if $b$ divides $a$.
If something divides both $a$ and $b$, then it also divides $r$. And, if something divides $b$ and $r$, then it divides $a$, too.

An easy example is to find the $\text{gcd}$ of $26$ and $21$:
$\text{gcd}(26, \ 21) = \text{gcd}(21, \ 5) = \text{gcd}(5, \ 1) = 1$.

We can think of the Euclidean Algorithm as a state machine.
_States_ will be a pair of nonnegative integers, $\mathbb{N} \times \mathbb{N}$.
The _start state_ is the original pair we want to find out the $\text{gcd}$ of, $\text{gcd}(a, \ b)$. In the above example, it is $\text{gcd}(26, \ 21)$. 
State _transition rule_ is $(x, \ y) \longrightarrow (y, \text{rem}(x, y))$ for $y \neq 0$. 
And, here is the more interesting part: the _preserved invariant_ is the $\text{gcd}$ itself, it stays constant. In the example, $\text{gcd}(26, \ 21)$ is $1$, $\text{gcd}(21, \ 5)$ is also $1$, and $\text{gcd}(5, \ 1)$ is also $1$.
So, we can say that $\text{gcd}(x, \ y)$ at any point is the same as the original value, $\text{gcd}(a, \ b)$.

We can write a short recursive function for it:
```python
def gcd(x, y):
    if y == 0:
        print(f'The result is: {x}')
        return x
    print(f'Calculating gcd({x}, {y})...')
    return gcd(y, x % y)
```

In this case `gcd(26, 21)` gives the output of:

```
Calculating gcd(26, 21)...
Calculating gcd(21, 5)...
Calculating gcd(5, 1)...
The result is: 1
```

---

There is also this fact:
$\text{gcd}(a, \ b) = sa + tb$ says that _the greatest common divisor of $a$ and $b$ is the linear combination of $a$ and $b$_.

If that's the case, we can also reason that _an integer is a linear combination of $a$ and $b$ iff it is a multiple of $\text{gcd}(a, b)$_.

First, let's take a look at linear combinations more closely.

Let's say we want to write $\text{gcd}(662, \ 414)$ as a linear combination.
It has to be in the form: $662s + 414t$.
We can use Euclid's Algorithm, but let's go step by step:

|  |  |
--- | --- 
| $662$ | $= 414(1) + 248$ |
| $414$ | $= 248(1) + 166$ |
| $248$ | $= 166(1) + 82$ |
| $166$ | $= 82(2) + 2$ |
| $82$ | $= 2(41) + 0$ |

You might already see the pattern.
Now, we're going to ignore the last row, and go reverse. We're going to rewrite everything with according to the remainder this time.

|  |  |
--- | --- 
| $2$ | $= 1(166) - 2(82)$ |
| $82$ | $= 1(248) - 1(166)$ |
| $166$ | $= 1(414) - 1(248)$ |
| $248$ | $= 1(662) - 1(414)$ |

Let's rewrite the same thing once again, but we'll plug in the values as shown. 

So, we can still write $2$ as $= 1(166) - 2(82)$, but let's plug in the value for $82$:

$2 = 1(166) - 2(1(248) - 1(166))$

Let's simplify it a bit:
$2 = 1(166) - 2(248) + 2(166)$.

And, even further:
$2 = -2(248) + 3(166)$.

Okay, now where are we going with this?

Let's continue plugging in values. This time for $166$:
$2 = -2(248) + 3(1(414) - 1(248))$. 

Now, simplify it: $2 = 3(414) - 5(248)$.

It's time to plug in the value for $248$:
$2 = 3(414) - 5(1(662) + 1(414))$.

Simplify it: $2 = -5(662) + 8(414)$.

In case you zoned out at some point during this process, let me repeat what we have as the end result: $-5(662) + 8(414)$.
That's exactly what we were looking for in the first place, a number of the form $662s + 414t$!

The $s$ and $t$ are also called _Bézout's coefficients_. It is [_Bézout's identity_](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity) that says we can write the greatest common divisor as a linear combination:

> If $a, \ b \in \mathbb{Z}^+$, then $\exists \ s, \ t \in Z$ such that $\text{gcd}(a, \ b) = sa + tb$.

The method we used to find out $s$ and $t$ is called the [_Extended Euclidean Algorithm_](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm) (the "Pulverizer").
