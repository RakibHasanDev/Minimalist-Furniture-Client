import { useEffect, useState } from "react"

const useSeller = email => {

    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setSellerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsSeller(data.isSeller);
                    setSellerLoading(false)

                })
        }
    }, [email])
    return [isSeller, isSellerLoading]

}

export default useSeller;