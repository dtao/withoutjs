# How it works

There are basically three parts to this hack:

1. You can conditionally style checkbox and radio input elements based on the `:checked`
   pseudo-selector.
2. If you wrap a checkbox or radio input in a `<label>`, the entire container is clickable.
3. You can also style the element immediately *after* one matching a given selector using the `+`
   (adjacent sibling) selector.

With all that in mind, here's the hack. We use *hidden* radio input elements to toggle state on the
page. Those get wrapped in `<label>` elements styled however we like. For example, the "button" to
show the nav menu up left is just a `<label>` with an `<input type="radio">` (hidden) inside it.

Immediately after these hidden inputs in the DOM we have the elements we want to show. For example,
after the nav elements are `<section>` containers (such as this one). Then in the CSS the `section`
element is hidden by default, unless it is immediately after a checked input:

```css
section {
    display: none;
}

input[type="radio"]:checked + section {
    display: block;
}
```

So that's the basic idea. You can take a closer look at the HTML and CSS to fully understand it.
