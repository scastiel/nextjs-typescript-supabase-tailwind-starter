import { Layout } from '../components/Layout'
import { useSession } from '../utils/hooks/useSession'

export default function Home() {
  const session = useSession()

  return <Layout session={session}>Welcome!</Layout>
}
