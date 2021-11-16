import { useState, useEffect } from 'react'
// import { useLatestAPI } from './useLatestAPI'
import { useURLMaker } from './useURLMaker'
import { apiRef } from 'utils/constants'

export function useFeaturedBanners (docType = null, pageSize = null, optional = null, optValue = null) {
    // const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI()

    const [featuredBanners, setFeaturedBanners] = useState(() => ({
        data: {},
        isLoading: true
    }))

    const URL = useURLMaker(apiRef, docType, pageSize, optional, optValue)

    useEffect(() => {
        if (!apiRef /* || isApiMetadataLoading */) {
            return () => {}
        }

        const controller = new AbortController()

        async function getFeaturedBanners () {
            try {
                setFeaturedBanners({ data: {}, isLoading: true })

                const response = await fetch(
                    URL, {
                        signal: controller.signal
                    }
                )
                const data = await response.json()

                setFeaturedBanners({ data, isLoading: false })
            } catch (err) {
                setFeaturedBanners({ data: {}, isLoading: false })
                console.error(err)
            }
        }

        getFeaturedBanners()

        return () => {
            controller.abort()
        }
    }, [/* apiRef, isApiMetadataLoading, */URL])

    return featuredBanners
}
