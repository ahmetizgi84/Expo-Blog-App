## Context API walktrough

- create a context object

```js
const MyContext = React.createContext();
```

- show the context object thing.provider and give it a value prop that has whatever information that we want to share

```js
export const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider value={"shared value"}>{children}</MyContext.Provider>
  );
};

export default MyContext;
```

- Then anytime that we want to get access to that information, we are going to import useContext hook and context object that we had created

```js
import React, { useContext } from "react";
import MyContext from "../MyContext";
```

- In functional component, we use useContext hook to reach the value which was shared

```js
const value = useContext(MyContext);
```
