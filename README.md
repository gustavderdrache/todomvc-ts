Training Project: Todo App
==========================

This Repo
---------

**Installation:** Type `npm install`.

**Building:**

1. Run `npm start`.
2. Visit [http://localhost:8000/](http://localhost:8000/).

The Rules
---------

Build a todo app, following the [TodoMVC app specification](https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality) (mirrored in the `docs/` directory). If you want to see it in action, be sure to check out the [Backbone reference implementation](http://todomvc.com/examples/backbone/). Don’t worry about persistence or routing unless you’re done with the rest.

The index.html file (see the `templates/` directory) is almost a complete copy of the TodoMVC app, but with one exception: the todo markup has been removed. Consult [the template repo](https://github.com/tastejs/todomvc-app-template/blob/master/index.html#L22-L41) for the expected markup.

Your submission should:

* Use TypeScript.
* Use ES6 modules.
* Avoid frameworks (especially jQuery).

This starter project has some rules to keep you honest. Specifically, you’re banned from using the `any` type (implicitly or otherwise), as well as the `var` keyword. Think in modern JavaScript, and refer back to your slides.

Tips for success:

1. Design your data model. Try to answer these questions before you start writing code:

    1. What information do you need to track in a todo item?
    2. Should a todo item be a class or a mere interface?
    2. How will you make todo items uniquely identifiable?
    3. Will you be using an array to store todos, or a more sophisticated structure (like an ES6 [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map))?
    4. What are the types involved in the answers to the above questions?

2. Consider the communication channels in your application. What parts of the code are responsible for updating the interface? What happens when a todo is updated? When one is removed?

3. Use modules.

4. In fact, use lots of modules. Modules are a good way to keep you from having to worry about the details of everything all at once.

5. The [Mozilla Developer Network](https://developer.mozilla.org/en-US/) is a fantastic resource on JavaScript and the DOM. Here are a few that will be of particular use:

    1. [Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
    2. [`Document#createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
    3. [Events and the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)
      4. [`EventTarget#addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
    5. [`Element#classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

6. If you need to manipulate DOM elements in code, look up their interfaces on the MDN. For example, `<input>` elements conform to the [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) interface. Don’t forget to check the parent interface, [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).

7. Be aware that the type that TypeScript assigns to query methods may not be what you want. `document.getElementById()` returns just `HTMLElement`. You’ll need to use a type assertion (the `as` keyword) to get it to be of the “correct” type:

    ```ts
    // Incorrect, and will result in a type error
    let textInput: HTMLInputElement = document.getElementById('#input');

    // Correct
    let textInput = document.getElementById('#input') as HTMLInputElement;
    ```

8. JavaScript is a quirky language with a variety of data structures. You will find this project easier if you explore the different ways to structure your data and pick the one more appropriate to the task at hand.

9. Tooling is important. If your editor doesn’t communicate well with TypeScript, consider using one that does (such as [VS Code](https://code.visualstudio.com/)).

10. If you’re stuck on an error message, stop and read it. That is, actually read the thing. TypeScript is simply following an algorithm to try to make sure your types are correct, and that algorithm can produce misleading results.

11. If you’re stuck otherwise: Stop. Think. Consult the plan (you _did_ plan ahead, right?).

Miscellaneous Resources:

* [TypeScript documentation](http://www.typescriptlang.org/docs/home.html)
* [MDN: Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [MDN: JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)