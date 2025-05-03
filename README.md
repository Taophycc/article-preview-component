# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

!()

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```js
for (let i = 0; i < share.length; i++)
  share[i].addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      footerSection.classList.toggle('hidden');
      footerSection.classList.toggle('show');
      popup.classList.toggle('hidden');
      popup.classList.toggle('show');
    }

    if (window.innerWidth >= 768) {
      popup.classList.toggle('hidden');
      popupShare.classList.add('hidden');
    }
  });
```

## Author

- Website - [taophycc](https://www.taophycc.github.com)
- Frontend Mentor - [@taophycc](https://www.frontendmentor.io/profile/taophycc)
- Twitter - [@yourusername](https://www.twitter.com/taophyc_)



