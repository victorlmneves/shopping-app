const parseCredits = (credits) => {
  const totalCredits = Array.isArray(credits)
    ? credits.length
    : !isNaN(credits)
    ? credits
    : 0

  return totalCredits * 10
}

export default parseCredits
