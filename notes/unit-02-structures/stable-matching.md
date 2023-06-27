---
layout: layout.njk
tags: [pages, structures]
title: Stable Matching
date: 2023-01-24
eleventyNavigation:
  key: 21. Stable Matching
  order: 24
---

# Stable Matching

A ==stable matching== is a matching with no ==rogue couples==.

Say, we have four people: Ed, Norma, Nadine, and Hank.
Ed and Nadine are married to each other. Norma and Hank are also married.
But, Ed loves Norma more than Nadine, and Norma loves Ed more than Hank. Therefore, we can say that Ed and Norma form a _rogue couple_. Therefore, this is not a stable matching.

---

There is one example of [the stable marriage problem](https://en.wikipedia.org/wiki/Stable_marriage_problem). The procedure for finding stable marriages is given in the course under the elegant name of "mating ritual". It goes like this: 

Given that there are the same number of boys and girls, each boy has a list of girls in the order he prefers. Each day, a boy goes to the girl who is at the top of his list, and serenades her. Since a girl can have multiple suitors serenading her, she will choose the one she likes best, and tell him to come back tomorrow. The boys who are rejected will cross off that girl's name from their list, and go to the second girl on their list to serenade. 
This process _terminates_ with everyone being in a pair, without any rogue couples.
Why is that?
Well, let's assume the contrary, and say there is one boy left on the last day, who is not paired up with. That means, his list is empty; there is no one for him to serenade. That also means that every girl is crossed off his list, meaning that every girl preferred someone else. So, every girl is already paired up. But, there has to be the same number of boys and girls, and it is the last day, therefore we would contradict the proposition that there is one boy left unpaired.

Also, note that when a girl is crossed off a boy's list, that means she has a better suitor that she prefers over him. That is the _preserved invariant_ of the mating ritual.

The rank of each girl's current best option is _weakly increasing_, while each boy's current option is _weakly decreasing_.

This mating ritual is deterministic and always produces the same unique stable matchings.

It is also an example of a ==bipartite matching== problem.

![Bipartite matching example](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Halls_theorem_matching_graph_theory.svg/231px-Halls_theorem_matching_graph_theory.svg.png)


In this case, we can define a match as a _total injective function from the left vertices to the right vertices_, or in the above example, from $A$ to $B$.

If we call this above graph $H$, the graph of the total injective function (having the blue edges) is the subset of $H$.

But, if its size is bigger than the size of its image, then it is a ==bottleneck==.

If there are no bottlenecks, then there is a match, and this is called [==Hall's theorem==](https://en.wikipedia.org/wiki/Hall%27s_marriage_theorem).

So, for every set of left vertices of $H$, the size of the set should be less than or equal to the image of that set. 
If $S$ is the set of vertices in $A$, and $E(S)$ is the image of $S$, then in order to have a match, $|S| \leq |E(S)|$.

