---
title: Keeping it Svelte
tags: [SVELTE]
background: ['#720000', '#3F0000']
color: [white, white]
rotation: [-4, 4]
date: 04/07/2022
---

There are many articles written about React performance optimizations. In general, if some state update is slow, you need to:

Verify you’re running a production build. (Development builds are intentionally slower, in extreme cases even by an order of magnitude.
Verify that you didn’t put the state higher in the tree than necessary. (For example, putting input state in a centralized store might not be the best idea.)
Run React DevTools Profiler to see what gets re-rendered, and wrap the most expensive subtrees with memo(). (And add useMemo() where needed.)

This last step is annoying, especially for components in between, and ideally a compiler would do it for you. In the future, it might.

In this post, I want to share two different techniques. They’re surprisingly basic, which is why people rarely realize they improve rendering performance.

These techniques are complementary to what you already know! They don’t replace memo or useMemo, but they’re often good to try first.

Verify you’re running a production build. (Development builds are intentionally slower, in extreme cases even by an order of magnitude.
Verify that you didn’t put the state higher in the tree than necessary. (For example, putting input state in a centralized store might not be the best idea.)
Run React DevTools Profiler to see what gets re-rendered, and wrap the most expensive subtrees with memo(). (And add useMemo() where needed.)

This last step is annoying, especially for components in between, and ideally a compiler would do it for you. In the future, it might.

In this post, I want to share two different techniques. They’re surprisingly basic, which is why people rarely realize they improve rendering performance.

These techniques are complementary to what you already know! They don’t replace memo or useMemo, but they’re often good to try first.
