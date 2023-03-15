import React from 'react'
import ReactDOM from 'react-dom/client'

import { apiRequest } from './api'

function getParams (): any {
  const searchParams = new URLSearchParams(document.location.search)
  const params: any = {}
  for (const key of searchParams.keys()) {
    params[key] = searchParams.get(key)
  }
  return params
}

function Main (props?: any): React.ReactElement {
  return <pre>{apiRequest('actor', { name: props.actor })}</pre>
}

const rootNode = document.getElementById('root')
if (rootNode !== null) {
  const root = ReactDOM.createRoot(rootNode)
  root.render(React.createElement(Main, getParams()))
}
