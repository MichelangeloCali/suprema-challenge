'use client'

import { useTheme } from '@/hooks'

export const Card = () => {
  const { toggleTheme } = useTheme()

  return (
    <div>
      <button onClick={toggleTheme} />
    </div>
  )
}
