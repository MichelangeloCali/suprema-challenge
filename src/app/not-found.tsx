import { BackButton } from '@/components'
import { NotFoundContent, TextNotFound } from './styles'

export default function notFound() {
  return (
    <NotFoundContent>
      <BackButton />
      <TextNotFound>Page not found</TextNotFound>
    </NotFoundContent>
  )
}
