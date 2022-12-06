### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a JavaScript framework. It is used to build user inetractive interfaces faster then vanilla JS.
- What is Babel?
    Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments
- What is JSX?
    JSX is a JS extension that allows you to type JS object in HTML elements.
- How is a Component created in React?
    A component is created as a JS function and returns a JSX element.
- What are some difference between state and props?
    State is a value set and stored inside the component. A prop is passed to a component.
- What does "downward data flow" refer to in React?
    Downward data flow is the idea that parent components pass data down to their children via props
- What is a controlled component?
    A controlled compent handles a form's data with the components state.
- What is an uncontrolled component?
 A uncontrolled component handles the form right in the DOM.
- What is the purpose of the `key` prop when rendering a list of components?
    Keys are used in React to identify which items in the list are changed, updated, or deleted. 
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    The array index as the key is a poor choice because if the array is not static or is being reordered the index will change and react will re-render the wrong element.
- Describe useEffect.  What use cases is it used for in React components?
    useEffect is stores a function and runs it once react renders. Then it will run it every time the second arguement's value passed into uuseEffect changes. useEffect is used for timers, counters, fetching data and more.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef stores a value in a object with the key 'current'. It holds the value through all renders, similar to local storage. A change to the ref does not cause a re-render.
- When would you use a ref? When wouldn't you use one?
    You would use a ref when using setInterval and accessing the DOM. It should not be used to make changes to the DOM.
- What is a custom hook in React? When would you want to write one?
    A custom hook is a reuseable function created by the developer. You would write one when you have a pattern of code being repeated in different components.