export let albumTracks = (() => {
  return [1,2,3,4,5,6,7,8,9,10].map((track) => {
    return {id: track, title: "Test Song " + track, length: track + ":14", single: track % 2 === 0 ? true : false}
  })
})
