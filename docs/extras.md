Extras
======

Persistence
-----------

Your app should dynamically persist the todos to [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). If possible, use the keys `id`, `title`, `completed` for each item. Make sure to use this format for the localStorage name: `todos-[framework]`. Editing mode should not be persisted.

Routing
-------

You may use either the [Flatiron Director](https://github.com/flatiron/director) routing library located on cdnjs here: [https://cdnjs.com/libraries/Director](https://cdnjs.com/libraries/Director), or directly listen for the [`hashchange`](https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent) event on the `window` object. The following routes should be implemented: `#/` (all - default), `#/active` and `#/completed` (`#!/` is also allowed). When the route changes, the todo list should be filtered on a model level and the `selected` class on the filter links should be toggled. When an item is updated while in a filtered state, it should be updated accordingly. E.g. if the filter is `Active` and the item is checked, it should be hidden. Make sure the active filter is persisted on reload.