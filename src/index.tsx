import React from 'react'
import ReactDOM from 'react-dom/client'
import { Create } from './activitypub/activity'
import { Person } from './activitypub/actor'
import { ActivityStream } from './activitypub/base'
import { Note } from './activitypub/object'

// import { apiRequest } from './api'

function getParams (): any {
  const searchParams = new URLSearchParams(document.location.search)
  const params: any = {}
  for (const key of searchParams.keys()) {
    params[key] = searchParams.get(key)
  }
  return params
}

function createNote (): Create {
  const actor = new Person('foo')
  const note = new Note({
    attributedTo: actor,
    published: 'now',
    content: 'hi',
    to: new ActivityStream()
  })
  return new Create(actor, note)
}

function Main (props?: any): React.ReactElement {
  return <pre>{JSON.stringify(createNote(), null, 2)}</pre>
}

const rootNode = document.getElementById('root')
if (rootNode !== null) {
  const root = ReactDOM.createRoot(rootNode)
  root.render(React.createElement(Main, getParams()))
}
