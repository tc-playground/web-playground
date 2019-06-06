# CSS Overview

## Introduction

An overview of basic CSS syntax.

---

## Types of CSS

1. __Inline CSS__ - Use an HTML element `style` attribute.

2. __Internal CSS__ - Use an HTML `<style>` tag in the HTML document `<header>`.

3. __External CSS__ - Use one or more HTML `<link rel="stylesheet" href="css/style.css"/>` tags in the HTML document `<header>`, to reference CSS files. This is the preferred method.

---

## CSS Selector Syntax

```
selector {
    property01: value01;
    property02: value02;
}
```

1. __Element Selectors__ : Are defined by a `valid HTML element`.

2. __Identifier Selectors__ : Are defined by `#`. An ID should be unique and should be used mark multiple elements in an HTML document.

3. __Class Selectors__ : Are defined by `.`. A class is not unique and can be used to mark multiple HTML elements in an HTML document.

4. __Multiple Selectors__ : Are defined by using the 'conjunction operator' `,` to compose two selectors.

5. __Nested Selectors__ : Are defined by using the 'nested operator' ` ` to define a path to the target elements.

6. __Direct Child Selectors__ : Are defined by using the 'direct child operator' `>` to define a path to the target elements.

6. __Direct After Selectors__ : Are defined by using the 'direct after sibling operator' `+` to define a path to the target elements. NB: The element before.

7. __Attribute Selectors__ : Are defined by using the 'direct after sibling operator' `[attribute_name]` / `[attribute_name=attribute_value]` syntax.








---

## CSS Browser Developer Tools

* Open Dev Tools: `<ctrl><shift><i>`.

    * `Elements Tab` for selecting elements for CSS debugging. 

    * `user agent stylesheet` is the default stylesheet defined by the browser.


---

## References

* [Modern HTML and CSS from the Beginning](https://www.udemy.com/modern-html-css-from-the-beginning) - Brad Traversy

* [Debugging](https://wpforms.com/docs/how-to-troubleshoot-css-not-working/)