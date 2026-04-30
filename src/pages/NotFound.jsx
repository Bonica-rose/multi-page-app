import P404 from '../assets/404.png'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center mt-10 px-4">
            <img
                src={P404}
                alt="Page Not found"
                className='h-60 w-auto object-cover'
            />
        </div>
    );
}

export default NotFound