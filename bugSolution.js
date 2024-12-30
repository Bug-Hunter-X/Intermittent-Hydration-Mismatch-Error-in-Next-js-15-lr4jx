```javascript
// pages/index.js
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Check if document exists before manipulating DOM
    if (typeof document !== 'undefined') {
      // Your DOM manipulation code here
      console.log('DOM manipulation after hydration'); 
    }
  }, []);

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}
```