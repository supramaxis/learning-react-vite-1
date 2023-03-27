import McModal from "../components/McModal"
import { useItems } from "../context/ItemsContext"

function McApiAdmin() {
  const { user } = useItems()
  console.log('McApiAdmin:', user)

  return (
    <div>
      <McModal/>
    </div>
  )
}

export default McApiAdmin