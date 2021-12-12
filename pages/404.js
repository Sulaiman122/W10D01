import { useRouter } from 'next/router'

const Error = () => {
    const router = useRouter()
    setTimeout(() => {
        router.push('/')
    }, 3000);
    return ( 
        <>
            <h3>Wrong Path</h3>
            <h5>Page will be redirected to Home page after 3 seconds.</h5>
        </>
     );
}
 
export default Error;