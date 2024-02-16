'use client'

import { useRouter } from 'next/navigation'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

import { ButtonContainer } from './BackButton.styles'

export const BackButton = () => {
  const router = useRouter()

  return (
    <ButtonContainer onClick={() => router.back()}>
      <IoArrowBackCircleOutline size={32} />
    </ButtonContainer>
  )
}
