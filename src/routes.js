import React from 'react'

//Brasileirão

const Clubes = React.lazy(() => import('./views/pages/teams/clubes/List'))
const Atletas = React.lazy(() => import('./views/pages/players/atletas/List'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/clubes/list', name: 'Lista de clubes', element: Clubes },
  { path: '/atletas/list', name: 'Lista de Atletas', element: Atletas },
]

export default routes
