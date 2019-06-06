# CSS Overview

## Introduction

An overview of basic CSS syntax.

---

## Types of CSS

1. __Inline CSS__ - Use an HTML element `style` attribute.

2. __Internal CSS__ - Use an HTML `<style>` tag in the HTML document `<header>`.

3. __External CSS__ - Use one or more HTML `<link rel="stylesheet" href="css/style.css"/>` tags in the HTML document `<header>`, to reference CSS files. This is the preferred method.

---

## CSS Selectors

* __Selector Syntax__

    ```
    selector {
        property01: value01;
        property02: value02;
    }
    ```

### Standard Selectors

1. __Element Selectors__ : Are defined by a `valid HTML element`.

2. __Identifier Selectors__ : Are defined by `#`. An ID should be unique and should be used mark multiple elements in an HTML document.

3. __Class Selectors__ : Are defined by `.`. A class is not unique and can be used to mark multiple HTML elements in an HTML document.

4. __Multiple Selectors__ : Are defined by using the 'conjunction operator' `,` to compose two selectors.

5. __Nested (Indirect Child) Selectors__ : Are defined by using the 'nested operator' ` ` to define a path to the target elements.

6. __Direct Child Selectors__ : Are defined by using the 'direct child operator' `>` to define a path to the target elements.

7. __Direct After Sibling Selectors__ : Are defined by using the 'direct after sibling operator' `+` to define a path to the target elements. NB: The sibling element directly after the referenced element is the target.

8. __Attribute Selectors__ : Are defined by using the 'direct after sibling operator' `[attribute_name]` / `[attribute_name=attribute_value]` syntax.


### Pseudo Selectors

1. __Nth Child Pseudo Selectors__ : Targets sibling elements in a list of sibling. They are defined by using the 'pseudo selector operators' `:` with a defined `type`.

    * `first-child` - The first child.

    * `last-child` - The last child.

    * `nth-child(Expr)` - Where expression may is `${stepsize}n${offset}`. For example:

        * `nth-child(3)` - The third element.

        * `nth-child(2n+0)` - Every even element.

2. __before and after Pseudo Selectors__ : Add additional "overlay content" that is not in the underlying HTML document. They are defined by using the 'pseudo selector operators' `:` with a defined `type`. The content can be defined using the `content` attribute in the CSS class definition.

    * `before`

    * `after`








---

## CSS Browser Developer Tools

* Open Dev Tools: `<ctrl><shift><i>`.

    * `Elements Tab` for selecting elements for CSS debugging. 

    * `user agent stylesheet` is the default stylesheet defined by the browser.


---

## References

* [Modern HTML and CSS from the Beginning](https://www.udemy.com/modern-html-css-from-the-beginning) - Brad Traversy

* [Debugging](https://wpforms.com/docs/how-to-troubleshoot-css-not-working/)