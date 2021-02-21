export const syncFavoriteFlyers = (items, favoriteFlyers) => {
  return items.map((item) => ({
    ...item,
    favorite: favoriteFlyers.findIndex((favoriteItem) => favoriteItem.id === item.id) !== -1,
  }))
}

export const getUpdatedFavorites = (flyerToUpdate, favoriteFlyers) => {
  const toRemove = favoriteFlyers.find((flyer) => flyer.id === flyerToUpdate.id)
  if (toRemove) {
    return favoriteFlyers.filter((flyer) => flyer.id !== flyerToUpdate.id)
  }
  const newItems = favoriteFlyers.slice()
  newItems.push({ id: flyerToUpdate.id, name: flyerToUpdate.title })
  return newItems
}

export const getUrlParams = (search) => {
  let hashes = search.slice(search.indexOf('?') + 1).split('&')
  return hashes.reduce((params, hash) => {
    let [key, val] = hash.split('=')
    return Object.assign(params, { [key]: decodeURIComponent(val) })
  }, {})
}
