import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useActions } from '../hooks/actions'

const FavoritesPage = () => {

  const { favorites } = useAppSelector(state => state.github)

  if (favorites.length === 0 ) return <p className='text-center'>No items</p>

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      <ul className="list-none">
        { favorites.map(f => (
          <li key={f} className='mb-3 flex justify-between items-center'>
            <a href={f} target='_blank'>{f}</a>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default FavoritesPage