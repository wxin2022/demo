
export function safeAdd() {
  let nums = arguments;
  return [].reduce.call(nums, (sum, item) => {
    return sum + (item ?? 0)
  }, 0)
}

export function safeSub(a, b) {
  return a - b
}