import './index.css'

const TabItem = props => {
  const {eachTab, updateTabItem, isActive} = props
  const {displayText, tabId} = eachTab
  const clickTabItem = () => {
    updateTabItem(tabId)
  }
  const activeTabStyle = isActive ? 'active-tab-button' : 'tab-button'

  return (
    <li className="each-tab" onClick={clickTabItem}>
      <button type="button" className={activeTabStyle}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
