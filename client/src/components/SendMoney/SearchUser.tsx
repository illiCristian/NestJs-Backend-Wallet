'use client'
import { useState } from 'react'
// import axios from 'axios'

type CardProps = {
  imageSrc: string
  user: string
  email: string
}

const example = [
  {
    imageSrc: 'https://picsum.photos/200',
    user: 'prueba',
    email: 'prueba@gmail.com',
  },
  {
    imageSrc: 'https://picsum.photos/200',
    user: 'intenta otra vez',
    email: 'intenta-otra-vez@gmail.com',
  },
  {
    imageSrc: 'https://picsum.photos/200',
    user: 'por ultimo, otra',
    email: 'por-ultimo-otra@gmail.com',
  },
]

const Card = ({ imageSrc, user, email }: CardProps) => {
  return (
    <section className="w-[730px] h-[126] mb-4 rounded border shadow-lg">
      <div className="flex items-center justify-start gap-4 px-6 py-10">
        <img className="w-12 h-12 rounded-full" src={imageSrc} alt={user} />
        <div>
          <div className="font-bold text-xl mb-2">{user}</div>
          <p className="text-gray-700 text-base">{email}</p>
        </div>
      </div>
    </section>
  )
}

const SearchUser = () => {
  const [query, setQuery] = useState('')
  const [cards, setCards] = useState<CardProps[]>([])

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // const response = await axios.get('/api/search', { params: { query } }); // hacer la petición al backend para traer los datos
    // setCards(response.data);
    setCards(example) // ejemplo en duro sin el query de la busqueda
  }

  return (
    <section className="m-auto w-[892px] h-[670px] border py-10 px-20 my-5 rounded-md shadow-xl">
      <form onSubmit={handleSearch}>
        <div className="inline-flex w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.017 37.763C14.5753 37.763 14.3545 37.5422 14.3545 37.1005C14.5753 34.2297 16.7837 32.2422 19.6545 32.2422H34.2295C37.1003 32.2422 39.3087 34.4505 39.5295 37.1005C39.5295 37.3214 39.3087 37.763 39.0878 37.763C38.867 37.763 38.4253 37.5422 38.4253 37.3214C38.2045 35.113 36.4378 33.5672 34.4503 33.5672H19.6545C17.4462 33.5672 15.6795 35.3339 15.6795 37.3214C15.4587 37.5422 15.2378 37.763 15.017 37.763Z"
              fill="#60C1F8"
            />
            <path
              d="M34.8919 22.3034C34.8919 22.7451 34.8919 23.4076 34.6711 23.8492C34.6711 24.2909 34.4503 24.9534 34.2294 25.3951C34.0086 25.8367 33.7878 26.2784 33.5669 26.7201C33.3461 27.1617 32.9044 27.6034 32.6836 27.8242C32.2419 28.2659 31.8003 28.4867 31.5794 28.7076C31.1378 28.9284 30.6961 29.1492 30.2544 29.3701C29.8128 29.5909 29.3711 29.8117 28.7086 29.8117C28.2669 29.8117 27.6044 30.0326 27.1628 30.0326C26.7211 30.0326 26.0586 30.0326 25.6169 29.8117C25.1753 29.8117 24.5128 29.5909 24.0711 29.3701C23.6294 29.1492 23.1878 28.9284 22.7461 28.7076C22.3044 28.4867 21.8628 28.0451 21.6419 27.8242C21.2003 27.3826 20.9794 26.9409 20.7586 26.7201C20.5378 26.2784 20.3169 25.8367 20.0961 25.3951C19.8753 24.9534 19.6544 24.5117 19.6544 23.8492C19.6544 23.4076 19.4336 22.7451 19.4336 22.3034C19.4336 21.8617 19.4336 21.1992 19.6544 20.7576C19.6544 20.3159 19.8753 19.6534 20.0961 19.2117C19.6544 18.7701 19.8753 18.3284 20.3169 17.8867C20.5378 17.4451 20.9794 17.0034 21.2003 16.7826C21.4211 16.5617 22.0836 16.1201 22.3044 15.8992C22.7461 15.6784 23.1878 15.4576 23.6294 15.2367C24.0711 15.0159 24.5128 14.7951 25.1753 14.7951C25.6169 14.7951 26.2794 14.5742 26.7211 14.5742C27.1628 14.5742 27.8253 14.5742 28.2669 14.7951C28.7086 14.7951 29.3711 15.0159 29.8128 15.2367C30.2544 15.4576 30.6961 15.6784 31.1378 15.8992C31.5794 16.1201 32.0211 16.5617 32.2419 16.7826C32.4628 17.0034 32.9044 17.6659 33.1253 17.8867C33.3461 18.3284 33.5669 18.7701 33.7878 19.2117C34.0086 19.6534 34.2294 20.0951 34.2294 20.7576C34.6711 21.1992 34.8919 21.6409 34.8919 22.3034Z"
              fill="white"
            />
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.4495 20.9784C34.2287 19.4326 33.5662 18.1076 32.6829 17.2242C32.2412 16.5617 31.5787 16.1201 30.9162 15.6784C29.812 15.0159 28.2662 14.5742 26.7204 14.5742C22.9662 14.5742 19.6537 17.2242 18.9912 20.9784C19.8745 21.1992 20.7579 21.1992 21.4204 21.1992C24.7329 21.1992 28.0454 20.3159 30.6954 18.5492V21.1992H34.4495V20.9784Z"
              fill="#60C1F8"
            />
            <path
              d="M26.5 49.6875C13.6917 49.6875 3.3125 39.3083 3.3125 26.5C3.3125 13.6917 13.6917 3.3125 26.5 3.3125C39.3083 3.3125 49.6875 13.6917 49.6875 26.5C49.6875 39.3083 39.3083 49.6875 26.5 49.6875ZM26.5 7.72917C16.1208 7.72917 7.72917 16.1208 7.72917 26.5C7.72917 36.8792 16.1208 45.2708 26.5 45.2708C36.8792 45.2708 45.2708 36.8792 45.2708 26.5C45.2708 16.1208 36.8792 7.72917 26.5 7.72917Z"
              fill="#60C1F8"
            />
            <path
              d="M26.9413 29.8143C22.3038 29.8143 18.7705 26.0602 18.7705 21.6435C18.7705 17.006 22.5247 13.4727 26.9413 13.4727C31.5788 13.4727 35.1122 17.2268 35.1122 21.6435C35.1122 26.281 31.358 29.8143 26.9413 29.8143ZM26.9413 15.0185C23.1872 15.0185 20.3163 18.1102 20.3163 21.6435C20.3163 25.1768 23.408 28.2685 26.9413 28.2685C30.4747 28.2685 33.5663 25.1768 33.5663 21.6435C33.5663 18.1102 30.4747 15.0185 26.9413 15.0185Z"
              fill="#60C1F8"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="shadow appearance-none border rounded-sm w-full py-4 px-6 text-gray-700 mx-2 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=" &#127859;  search-email@gmail.com"
          />
        </div>
      </form>
      <div className="flex flex-col mt-4 w-max min-h-max h-full">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

export default SearchUser
