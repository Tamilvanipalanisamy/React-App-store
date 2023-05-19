import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <li className="each-app">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
