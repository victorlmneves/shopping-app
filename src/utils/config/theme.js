export const publicPages = [
  '/login',
  '/signup',
  '/signup-details',
  '/recover-password',
  '/change-password',
  '/recover',
]

export function isPublicLayout(pathname) {
  let isPublic = false
  publicPages.forEach((page) => {
    if (pathname.includes(page)) {
      isPublic = true
    }
  })

  return isPublic
}
