import Navbar from '@/components/common/navbar'
import { getData } from '@/utils/get-data'

const Header = async () => {
  const data = await getData()

  return <Navbar data={data} />
}

export default Header
