export function showImage(url) {

  return {
    type: 'SHOW_IMAGE',
    payload: url
  }
}

export function hideImage(url) {

  return {
    type: 'SHOW_IMAGE',
    payload: null
  }
}
