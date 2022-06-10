# Volume! Build

Complete the Volume! web app: 

![image](https://user-images.githubusercontent.com/478864/173118616-15bd4324-c156-4581-813f-1d0e1816cc27.png)

You are free to reference:
- Any of _your own_ work from the week
- Any of the technical resources in the class repository
- Google

Follow the normal process of creating a `dev` branch

## Implement the App

The html and css has already been built out. However, add `id`s to any elements as you see fit.

Volume requirements:

- Give the volume an initial state of 10
- Up and down buttons raise or lower the volume by `1`
- We don't want to blow out the speakers, so don't set volume above `20`
- No negative volumes, so don't set volume below `0`

## Rubric

> 😅 While we will grade the build, it won't count towards your overall grade.

The following is required for your assignment to be graded:
- PR open from `dev` to `main`
- PR Passes CI (linting)
- PR preview on netlify

| Commit with...                                                    |  10 |
| :---                                                              | --: |
| Volume display based on volume state (on page load)               |   2 |
| Up button: raises volume state, enforces max, re-displays volume  |   4 |
| Down button: lowers volume state, enforces min, re-displays volume|   4 |
