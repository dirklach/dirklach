---
title: "How to Change Active Link Classes in Nuxt 3"
description: "Loorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Loorem ipsum dolor sit amet."
dateModified: "2020-04-17"
datePublished: "2019-01-29"
featuredImage: "/img/articles/api.png"
topics:
  - nuxt
  - jamstack
  - netlify
  - cloudflare
---

# How to Change Active Link Classes in Nuxt 3

In this tutorial, you'll learn how to customize the CSS classes applied to active, exact active, and prefetched links in a Nuxt 3 application. This allows you to tailor the appearance of your navigation links to fit your custom styles or design system.

[![App Platorm](/img/articles/api.png)](https://www.digitalocean.com/products/app-platform)

## Step 1: Update `nuxt.config.ts`

To change the default link classes, you need to configure the `nuxt.config.ts` file. Nuxt 3 provides an `experimental.defaults` option that allows you to set custom classes for different link states.

Add the following configuration to your `nuxt.config.ts` file:

```typescript
// nuxt.config.ts

export default defineNuxtConfig({
  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: "c-menu__item--active",
        exactActiveClass: "c-menu__item--exact-active",
        prefetchedClass: "c-menu__item--prefetched",
      },
    },
  },
});
```

### Explanation

- activeClass: The class applied to a link when it matches the current route. For example, if the current route is "/home", the link to /home will have the class c-menu\_\_item--active.
- exactActiveClass: The class applied to a link when it exactly matches the current route. This is useful for highlighting links that match the exact path.
- prefetchedClass: The class applied to a link when the page it points to has been prefetched. Prefetching improves performance by loading the linked page in advance.

## Step 2: Define Custom Styles

Once you’ve updated the configuration, you need to define styles for the custom classes in your CSS. You can add these styles to your main stylesheet or within a <style> block if you’re using single-file components.

Add the following CSS to your stylesheet:

```css
/* styles.css */

.c-menu__item--active {
  color: blue;
  font-weight: bold;
}

.c-menu__item--exact-active {
  color: green;
  font-weight: bold;
}

.c-menu__item--prefetched {
  opacity: 0.7;
}
```
