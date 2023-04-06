// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails, updateActiveTabId} = props
  const {tabId, displayText} = eachTabDetails

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab">
      <button type="button" onClick={onClickTab} className="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
