function keyMirror(object, value) {
  let ret = {}, key;
  if (!(object instanceof Object && !Array.isArray(object))) {
    throw new Error('keyMirror(...): Argument must be an object.')
  }
  for (key in object) {
    if (!object.hasOwnProperty(key)) {
      continue
    }
    ret[key] = value ? (value + '_' + key) : key
  }
  return ret
}

export {
  keyMirror as KeyMirror
}
