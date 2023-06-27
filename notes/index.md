---
layout: layout.njk
tags: [pages, intro]
date: 2023-01-01
eleventyNavigation:
  key: Introduction
  order: 1
---

# Introduction

<div class="intro"></div>

Welcome to _Bite-Sized Mathematics for Computer Science_!

Let's start with some important points:

- **This is a [learn in public](https://www.swyx.io/learn-in-public) project**, rather, experiment. That is, there is some chance that there might be mistakes. For feedback, feel free to contact `riveazero at gmail dot com`.

- The best way to learn something is to talk/write about it, or teach it to someone. This is the crux of the project: this collection consists mostly of very short notes **written in an informal tone to get familiar with the concepts**.

- The structure of this work follows from the course material: there are 4 units, each with a varying number of sections. Those sections are intended to be **as short as possible**, or _bite-sized_. 

- That said, it is not a full go-through of the course material (that would be very daring!). In fact, it is mostly that I used its syllabus and the general overview; that's why **the title _Notes on MIT's 6.042J_ might be misleading**. 

- **The main goal is to get familiar with the concepts rather than do a deep-dive exploration.** That's why **so many things are left off**.

- When you read something like "let's prove it," don't expect a rigorous mathematical proof. It is just a very, _very_ informal way to convey the idea, the reasoning, of a proof that's given in the course or the coursebook. 

- Some of the examples are from the practice exercises in the course's relevant section; some of them are from other resources. Sometimes I provide a solution I came up with myself; sometimes it's from the lecture videos or the coursebook. 

- This collection as a whole will probably make the most sense as a very short and informal supplement to the course, especially if you don't have a mathematical background but still want to browse the material.

- Still, **there are some prerequisites**. It is assumed you have studied a bit of math before. The course itself [requires background](https://openlearninglibrary.mit.edu/courses/course-v1:OCW+6.042J+2T2019/courseware/30a3227b34eb4b2b8f1df191e7632f79/82b828ab487a4cd08a4357743d121e79/?activate_block_id=block-v1%3AOCW%2B6.042J%2B2T2019%2Btype%40sequential%2Bblock%4082b828ab487a4cd08a4357743d121e79) on Single Variable Calculus, and _familiarity with sequences and series, limits, and differentiation and integration of functions of one variable_. I provided some resources that I found helpful in the [Prerequisites & Resources](bite-sized-math-for-cs/prerequisites-and-resources) section, but here is the thing: a lack of background knowledge shouldn't deter you; quite the opposite, that means there's still a lot more opportunity to learn. That's a good thing. I don't think you need to be an expert on these subjects either; since this collection is only to provide familiarity with the concepts, that's okay if you don't know the intricacies of a topic.

- Sometimes, a section only consists of definitions without examples. These are just notes. The point is to keep it as simple and short as possible. Here and there, when there is no example, I provide links to other resources that explain the material at a very basic, introductory level. 

---

### What is 6.042J?

6.042J, _Mathematics for Computer Science_, is a free course that's offered through MIT's [OpenCourseWare](https://openlearninglibrary.mit.edu/courses/course-v1:OCW+6.042J+2T2019/about). There are several versions of the course, this work is based on the 2015 one.


### Why write about mathematics when you don't have a formal education in it?

Because I want to.
Learning is, admittedly, slow — especially mathematics. But I want to document what I'm learning as I'm doing it; that's the point of [_learning in public_](https://www.swyx.io/learn-in-public).


### Couldn't you have chosen a simpler resource rather than picking up an MIT course syllabus to "gain familiarity with concepts"?

Yes, I could've. There are tons of resources, as I included in the [Prerequisites and Resources](bite-sized-math-for-cs/prerequisites-and-resources) page. However, it's easy to get lost in details; 6.042 is structured, and it is a challenge. And it's fun. 
I also enjoyed Albert Meyer's explanations and teaching. That's another reason.


### You don't go through the problem sets, or the exams.

That's correct, and it's intentional.
Again, the point is to be as short as possible, only to explore concepts, so it mostly just scratches the surface.

So, it's normal that `${subject}` is left out in `${section}`. There are many things left out.

---

## Some points on notation:

- The coursebook and slides use the symbol $::=$ (as in $x ::= y$, $x$ is assigned to $y$). I used $=$ (the equal sign) for this. 
- "**iff**" is the biconditional, a shorthand for "if and only if", you can check out [Logic and Propositions](bite-sized-math-for-cs/unit-01-proofs/logic-and-propositions/), so it is not a grammatical mistake if you've not seen it before.

---

"_Anybody with enough curiosity ought to be able to explore a field_.<sup>*</sup>" - Eric Grimson, Chancellor for Academic Advancement at MIT, Professor of Computer Science

<sup>*</sup><span style="font-size: 18px;">From <a href="https://chalk-radio.simplecast.com/episodes/opening-computer-science-to-everyone-with-chancellor-eric-grimson-Bpcx1tMI">MIT's Chalk Radio</a></span>.
