function customRender(reactElement, container){
 /*  
 const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)

  container.appendChild(domElement)

  return domElement  // Return the created DOM element for testing purposes.

  // In a real-world scenario, you'd also need to update the component's state and re-render it.
  // For simplicity, we're just returning the created DOM element here.
  */

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if (prop === 'children' ) continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement)
  }
 


const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)