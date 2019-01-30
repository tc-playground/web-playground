# React `state` system.

## Introduction

---

## Overview

* `state` is only useable with `class components`.

    * > __NB__: Or by using the `hooks` system.

* `state` is a JavaScript object associated with a `component`.

* `state` changes cause the associated `component` to `re-render.`

* `state` must be initialised when a component is created.

* `state` can only be updated via the component `setState()` method.

* `setState()` is __additive__. The new state is merged over the old state. Nothing is deleted.

* `state` is __NOT the same as__ `props`.

* `state` can passed from a `parent component` to a `child component` as `props`.