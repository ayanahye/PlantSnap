'use client'
import Link from 'next/link'

export default function Page() {
    return (
      <main>
        <div>TO DO: Search</div>
        <p>
          <strong>The following buttons will take you to the results page.</strong>
        </p>
        <button>
          <Link href={{ pathname: '/listings-image' }}>
            Image Search: Rose
          </Link>
        </button>
        <button>
          <Link href={{ pathname: '/listings-text' }}>
            Text Search: Rose
          </Link>
        </button>
      </main>
    );
  }
