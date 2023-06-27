---
layout: layout.njk
tags: [pages, structures]
title: RSA Encryption
date: 2023-01-17
eleventyNavigation:
  key: 14. RSA Encryption
  order: 17
---

# RSA Encryption

In [_A Mathematician's Apology_](https://en.wikipedia.org/wiki/A_Mathematician%27s_Apology), G. H. Hardy wrote:

> [Number theorists] may be justified in rejoicing that there is one science, at any rate, and that their own, whose very remoteness from ordinary human activities should keep it gentle and clean.

How wrong he was.

Number theory is the core of modern cryptography today, which is central to all kinds of online activity. 

RSA, first proposed by Ronald Rivest, Adi Shamir, and Leonard Adleman in 1977, is a cryptosystem that also—you guessed it—relies on number theory.

---

So, we have two players: a sender and a receiver. 
The receiver has two keys: public and private. The sender encrypts their message with the _public key_ of the receiver, which is obviously public, and the receiver can decrypt the message using their _private key_ which is known only to the receiver. The beauty of it is that the sender and the receiver don't need to agree on a key beforehand.

Let's see how the receiver can generate public and private keys.

|  |
| :--- |
| First, generate two primes, $p$ and $q$. ($p$ and $q$ tend to be, you know, _As Random As Possible_ and _Many Digits Long_). |
| Multiply $p$ and $q$ to get $n$. In other words, let $n = pq$. |
| Then, find an integer $e$ such that $\text{gcd}(e, \ (p - 1)(q - 1)) = 1$, that is, $e$ is relatively prime to $(p - 1)(q - 1)$. <span style="color: #7852ee">*</span> |
| The pair $(e, \ n)$ is the public key which can be distributed. |
| Because $e$ is relatively prime to $(p - 1)(q - 1)$, it has an inverse ($e^{-1}$) in $\mathbb{Z}^*_{(p - 1)(q - 1)}$, let's call it $d$. <span style="color: #7852ee">**</span> |
| $d$ is the private key that the receiver keeps hidden. |

<span style="color: #7852ee">*</span> _Remember [Euler's totient function](/unit-02-structures/eulers-theorem)? ($\phi(pq) = (p - 1)(q - 1)$ for primes $p \neq q$.)_
<span style="color: #7852ee">**</span> _Remember that $\mathbb{Z}^*_n$ is the set of numbers in $[0, \ n)$ that are relatively prime to $n$_.

If you knew what $p$ and $q$ are, it'd be easy to figure out what the private key is. Well, the thing with one-way functions is that they are _easy to compute_ but _hard to invert_. So, even if it's easy to compute the product of $p$ and $q$ to get $n$, it's hard to factor $n$ to get $p$ and $q$.

---

What about the sender?

First, the message $m$ that they are going to send to the receiver has to be in the range $[1, n)$, which means it can be represented by a _Many Digits Long_ number.

Because the sender knows the receiver's public key, they need to raise the message $m$ to $e$ in $\mathbb{Z}_n$ (has to be $\text{mod}(n)$) to get the encoded message $\hat{m}$:
$$\hat{m} = m^e \ \ (\mathbb{Z}_n)$$

Then, how does the receiver decode $\hat{m}$?
They just need to raise $\hat{m}$ to their private key $d$ in $\mathbb{Z}_n$ (again, $\text{mod}(n)$) to get the decoded message:
$$m = \hat{m}^d \ \ (\mathbb{Z}_n)$$

