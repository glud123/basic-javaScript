// const React = (() => {
//   let hooks = [];
//   let currentHook = 0;
//   return {
//     render: (Component) => {
//       let Comp = Component();
//       Comp.render();
//       currentHook = 0;
//       return Comp;
//     },
//     useState: (initialState) => {
//       hooks[currentHook] = hooks[currentHook] || initialState;
//       const currentHookIndex = currentHook;
//       const setState = (state) => {
//         hooks[currentHookIndex] = state;
//       };
//       return [hooks[currentHook++], setState];
//     },
//     useEffect: (callback, deps) => {
//       const depsArray = hooks[currentHook];
//       let hasDep = !deps;
//       let hasChanged = hooks[currentHook]
//         ? !deps.every((dep, i) => {
//             return Object.is(dep, depsArray[i]);
//           })
//         : true;
//       if (hasDep || hasChanged) {
//         callback();
//         hooks[currentHook] = deps;
//       }
//       currentHook++;
//     },
//   };
// })();

const React = (()=>{
  let hooks = [];
  let currentHook = 0;
  return {
    render:(Component)=>{
      const Comp = Component();
      Comp.render();
      currentHook = 0;
      return Comp;
    },
    useState:(initialState)=>{
      const hookState = hooks[currentHook];
      hooks[currentHook] = hookState || initialState;
      const currentIndex = currentHook;
      const setState = (state)=>{
        hooks[currentIndex] = state;
      }
      return [hooks[currentHook], setState];
    },
    useEffect:(callback, deps)=>{
      const hasDep = !deps;
      const hookDeps = hooks[currentHook];
      const hasChanged = hookDeps ? !deps.every((dep, i)=>{
        return Object(dep, hookDeps[i]);
      }) : true;
      if(hasDep || hasChanged){
        callback();
      }
      currentHook++;
    }
  }
})();

const { render, useState, useEffect } = React;

function counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect1===> ", count);
  }, [count]);
  useEffect(() => {
    console.log("Effect2===> ", count);
  }, []);
  useEffect(() => {
    console.log("Effect3===> ", count);
  });
  return {
    render: () => {
      console.log("render===> ", count);
    },
    click: () => {
      setCount(count + 1);
    },
  };
}

let app = render(counter);
app.click();
app = render(counter);
app.click();
app = render(counter);
