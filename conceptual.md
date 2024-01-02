### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is an open-source JavaScript library for building user interfaces. It is widely used for single-page applications. 
    - Created and maintained by Facebook 
    - can change data, without reloading the page

    You would want to use React for:
    - efficient updates
    - reusable components
    - strong community support
    - suitable for complex applications
    - cross-platform development: with frameworks like React Native, you can use React for building mobile apps that run on both iOS and Android. 

- What is Babel?
    Bable is a widely-used JavaScript transpiler
        - takes source code written in one programming language and transforms it into another language. 

- What is JSX?
    JavaScript XML
    - It is a syntax extension for JavaScrip that is often used with React.
    - allows devs to write HTML-like code within their JavaScript code. 
    - JSX is processed by Babel, and it is transpiled into JavaScript code that creates and manipulates virtual DOM elements. React then uses the elements to efficiently update the actual DOM in web apps. 

- How is a Component created in React?
    -components are reusable and self-contained building blocks that encapsulate a part of the user interface and its logic. 
    - core building blocks of React apps
    - allow you to break down complex user interfaces into smaller, manageable pieces
    - makes it easier to develop and maintain your application

- What are some differences between state and props?
    - both are used to manage and pass data to components, but have key differences

    State:
    - managed internally 
        - data that a component manages internally. 
        - represents the mutable data that can change over time and affect the component's behavior or rendering
    - initialized in the constructor: 
        - 'this.state' 
        - 'this.setState()'
    - mutable
        - can be modified with 'this.setState()' 
        - changes will trigger a re-render of the component
        - state changes are asynchronous 
    - local to the component
        - state is local to the component that defines it. 
        - cannot be accessed or modified directly by other components
    
    Props:
    - passed from parent to child
        - provide a way for parent components to communicate with their children and share data
    - immutable: 
        - cannot be modified by the component that receives them. 
        - read-only
    - functional components: 
        - props are the primary way to pass data to the component, as functional components do not have their own internal state. 
    - class components: 
        - props can be used to initialize the component's state in the constructor if needed. 
    - pure and deterministic: 
        - given the same props, a component should always render the same output, which makes it easier to reason about and test. 

- What does "downward data flow" refer to in React?
    - data flows from parent to child
    - parent components:
        - manage and maintain data
        - fetch data from APIs, store it in their state, or receive it from other sources.
    - Child components: 
        - receive data through props and use that data to render their UI or perform specific actions.
        - do not modify the data they receive
            - they rely on the data passed to them by their parents
    - Props
        - parent components pass data to the child component through props. 
        - read-only (cannot be modified)
        - provide a way for the parent components to share data with their children. 

- What is a controlled component?
    - rely on React to manage their state and user interactions
    - predictable 

- What is an uncontrolled component?
    - allow for direct DOM access
    - can be useful in specific scenarios
    - generally less predictable 

- What is the purpose of the `key` prop when rendering a list of components?
    - helps React identify and keep track of individual items in a list
    - essential for optimizing the performance of your React applications, especially when dealing with dynamic lists or when components within a list have their own state. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    - array indexes as keys are not stable when the list changes.
        - this can result in React misinterpreting which elements need to be updated or re-rendered, leading to incorrect rendering. 
    - react relies on keys to efficiently update and re-render components within a list. 
    - using a unique identifier per item in your data set is the best practice approach.

- Describe useEffect.  What use cases is it used for in React components?
    - 'useEffect' = a hook in React 
        - allows you to perform side effects in functional components. 
            - side effects = data fetching, manually changing the DOM, setting up and cleaning up timers or subscriptions, etc. 
        - powerful and flexible tool for managing side effects in React components. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    - useRef = React hook that allows you to create and manage mutable references to DOM elements 
    - changes to a 'ref' value do not trigger a re-render of the component
    - useful for scenarios where you need to access or modify values without affecting the component's rendering. 

- When would you use a ref? When wouldn't you use one?
    - you would typically use 'ref' when you: 
        - need to access or interact with DOM elements directly
        - store mutable values that persist across renders
        - perform certain imperative operations
    - you wouldn't use 'ref' 
        - managing component state
            - use useState or useReducer for managing component state
        - conditional rendering
        - form handling
        - global state management

- What is a custom hook in React? When would you want to write one?
    - a JavaScript function that follows a specific naming convention by starting with "use" and can contain stateful logic, side effects, or other reusable functionality. 
    - custom hooks allow you to extract and reuse complex logic from your components
