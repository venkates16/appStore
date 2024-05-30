// Write your code here

import './index.css'

let TabItems = props => {
  let {obj, updateState} = props
  let {displayText, tabId} = obj

  let update = () => {
    updateState(tabId)
  }

  return (
    <li>
      <button onClick={update}>{displayText}</button>
    </li>
  )
}

export default TabItems
