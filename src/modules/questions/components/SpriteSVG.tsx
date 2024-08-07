export default function SpriteSVG({ name }: { name: string }) {
  switch (name) {
    case "arrow":
      return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M19.7071 16.2071C19.3166 16.5976 18.6834 16.5976 18.2929 16.2071L12 9.91421L5.70711 16.2071C5.31658 16.5976 4.68342 16.5976 4.29289 16.2071C3.90237 15.8166 3.90237 15.1834 4.29289 14.7929L11.2929 7.79289C11.6834 7.40237 12.3166 7.40237 12.7071 7.79289L19.7071 14.7929C20.0976 15.1834 20.0976 15.8166 19.7071 16.2071Z"
                fill="#6C7081"/>
        </svg>

      )
  }
}