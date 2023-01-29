import React, { useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from '../models/models'

const RepoCard = ({ repo }: { repo: IRepo }) => {
    const { favorites } = useAppSelector(state => state.github)
    const {addFavorite, removeFavorite} = useActions()

    const [isFavorite, setIsFavorite] = useState(favorites.includes(repo.html_url))

    const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addFavorite(repo.html_url)
        setIsFavorite(true)
    }
    const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        removeFavorite(repo.html_url)
        setIsFavorite(false)
    }
  return (
    <div className='border pu-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
        <a href={repo.html_url} target="_blank">
            <h2 className="text-lg font-bold">{repo.full_name}</h2>
            <p className="text-sm">
                Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                Watchers: <span className='font-bold'>{repo.watchers}</span>
            </p>
            <p className="text-sm font-thin">
                <span className='mr-2'>{repo?.description || 'none-desc'}</span>
                <span>Language: <span className='font-bold'>{repo?.language}</span></span>
            </p>
            {!isFavorite && <button
                className="mb-2 mt-2 py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
                onClick={addToFavorite}
            >Add</button>}
            {isFavorite && <button
                className="mb-2 mt-2 py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
                onClick={removeFromFavorite}
            >Remove</button>}
        </a>
    </div>
  )
}

export default RepoCard