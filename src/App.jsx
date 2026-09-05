import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import HeaderBlock from './components/Header-block/Header-block'
import What from './components/What/What'
import { createGlobalStyle } from 'styled-components'
import Tools from './components/Tools/Tools'
import Past from './components/Past/Past'
const Global = createGlobalStyle`
  * {
  padding: 0px;
  margin: 0px;
  border: none;
  font-family: "Roboto", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Links */
 a, a:link, a:visited {
  text-decoration: none;
  
}

a:hover {
  text-decoration: none;
}

/* Common */
aside, nav, footer, header, section, main {
  display: block;
}

h1, h2, h3, h4, h5, h6, p {
  font-size: inherit;
  font-weight: inherit;
}

ul, ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

img, svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

/* Form */
input, textarea, button, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

button, input[type=submit] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  background: none;
  cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
  outline: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}

:root {
  --container-width: 1210px;
  --container-padding: 15px;
  --font-main: "Poppins", sans-serif;
  --font-accent: "Playfair Display", serif;
  --page-bg: #fff;
  --text-color: #000;
  --accent: #ac182c;
  --laptop-size: 1199px;
  --tablet-size: 959px;
  --mobile-size: 599px;
}

.dark {
  --page-bg: #252526;
  --text-color: #fff;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--page-bg);
  color: var(--text-color);
  font-family: var(--font-main);
  background-color: #000;
}

.none {
  display: none !important;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.no-scroll {
  overflow-y: hidden;
}

.container {
  padding: 0 var(--container-padding);
  max-width: var(--container-width);
  margin: 0 auto;
  width: 100%;
}

.container-right {
  /* overflow-x: hidden; */
  padding-left: calc((100% - var(--container-width)) / 2 + var(--container-padding));
}
@media (max-width: var(--laptop-size)) {
  .container-right {
    padding-left: var(--container-padding);
  }
}

.container-left {
  /* overflow-x: hidden; */
  padding-right: calc((100% - var(--container-width)) / 2 + var(--container-padding));
}
@media (max-width: var(--laptop-size)) {
  .container-left {
    padding-right: var(--container-padding);
  }
}



.footer {
  margin-top: auto;
}

.wrapper{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main{
  flex: 1 1 auto;
}
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <Global/>
      <Header></Header>
        <HeaderBlock />
        <What />
        <Tools/>
        <Past/>
      <footer>footer</footer>
    </div>


  )
}

export default App
