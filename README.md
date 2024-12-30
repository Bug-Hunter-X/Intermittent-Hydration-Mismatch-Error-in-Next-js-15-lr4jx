# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a bug encountered in Next.js 15 related to hydration mismatches. The issue is intermittent and occurs when using a third-party library that directly modifies the DOM. The exact cause is difficult to pinpoint, but it may be related to timing issues between client-side rendering and hydration.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the intermittent error in your browser's console.

## Bug Solution

The solution involved carefully reviewing how the third-party library interacts with the DOM. By ensuring that any DOM manipulation happens *after* hydration is complete, we were able to resolve the issue.   This is generally done by using Next.js's `useEffect` hook and checking for `document` to exist to ensure we are on the client side. 

## Additional Notes

This bug highlights the challenges of working with client-side rendering and hydration in Next.js. Thorough testing and careful consideration of DOM manipulation are crucial to prevent these types of errors.