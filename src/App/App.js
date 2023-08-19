import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const App = () => {
    const [image, setImage] = useState(null)
    const fetchPhoto = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/photos")
            const res = await data.json("")
            setImage(res.slice(0, 500))
        } catch (error) {
            console.log(error.message);
        }

    }
    useEffect(() => {
        fetchPhoto()
    }, [])
    return (
        <>
            <div className="container-fluid p-0 bg-dark  ">
                <div className="row m-0">
                    {image && image.map((elem) => {
                        return (
                            <div className="col-3 text-center mt-5" key={elem.id}>
                                <h3 className="text-light">{elem.title.substr(0, 10)}</h3>

                                <LazyLoadImage
                                    alt={elem.title}
                                    effect="blur"
                                    src={elem.thumbnailUrl} />

                                <div>
                                    <a href={elem.url} className="p-4 h5 text-primary">Click to url</a>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    );
}

export default App;