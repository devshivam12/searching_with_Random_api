import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [content, setContent] = useState([])
    const [searchItem, setSearchItem] = useState('')

    const fetchData = async () => {
        const response = await fetch('https://api.punkapi.com/v2/beers')
        const data = await response.json()
        setContent(data)
    }

    // console.log(content)

    useEffect(() => {
        fetchData()
    }, [])

    // this function help you to search an item using a name

    const searchContent = content.filter((item) => {
        return item.name.toLowerCase().includes(searchItem.toLowerCase());
    })
    return (
        <div className='main-container'>

            <input type="text"
                className='input-item'
                placeholder='Enter the name'
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value.toLowerCase())}
            />

            {/* Display the data of the API    */}


            {searchContent.map((contentList, index) => (
                <div key={index} className='card'>
                    <div className='container_content'>
                        <img src={contentList.image_url} alt="" />
                        <div className='items'>
                            <p>{contentList.name}</p>
                            <p>{contentList.tagline}</p>
                            <p>{contentList.abv}</p>
                            <p>{contentList.attenuation_level}</p>
                            <p>{contentList.brewers_tips}</p>
                            <p>{contentList.contributed_by}</p>
                            <p>{contentList.description}</p>
                            <p>{contentList.ebc}</p>
                            <p>{contentList.first_brewed}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FetchData
