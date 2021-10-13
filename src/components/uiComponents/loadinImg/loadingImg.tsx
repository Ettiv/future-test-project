import React, {useState} from 'react';
import Spinner from '../spinner/spiner';

interface IImagePorps {
    src: string,
    alt: string,
    className: string
}

const LoadingImage: React.FC<IImagePorps> = (props:IImagePorps) => {

    //const [loading, setLoaded] = useState<{ loading: boolean }>({loading: true});
    const [loading, setLoading] = useState(true);

    return (
        <>
            <img
                src={props.src}
                alt={props.alt}
                className={props.className}
                onLoad={() => {
                    setLoading(false);
                }}
                style={{visibility: loading ? "hidden" : "visible"}}
            />
            <div style={{visibility: loading ? "visible" : "hidden"}}>
                <Spinner/>
            </div>
        </>
    );
}

export default LoadingImage;