import Router from 'next/router'
import { useEffect } from 'react'

const IndexPage = (): void => {
    useEffect(() => {
        Router.push('/register')
    })
}

export default IndexPage
