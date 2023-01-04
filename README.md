# Web Components Crash Course

My first project with web components. Created by lilKriT.

# Web Components

Three main elements.

- Custom Elements
- Shadow Dom
- HTML Templates

## Custom Elements

```
class AppDrawer extends HTMLElement {}
window.customElements.define('app-drawer', AppDrawer)

// later
<app-drawer></app-drawer>
```

Some lifecycle methods:

- constructor
- connectedCallback
- disconnectedCallback
- attributeChangedCallback

## Shadow Dom

Lets you encapsulate and contain your mark up etc
Create with `elment.attachShadow({mode: open})`
Open means we have access from dev tools etc
Creates a shadowRoot which we can interact with

It has separate css etc

## HTML templates

You can store a template, including html and css
Add slots to add custom text
