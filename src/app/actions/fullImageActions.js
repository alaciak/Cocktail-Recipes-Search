export function showImage(url) {

  return {
    type: 'SHOW_IMAGE',
    payload: url
  };
}

export function hideImage() {

  return {
    type: 'HIDE_IMAGE',
    payload: null
  };
}
