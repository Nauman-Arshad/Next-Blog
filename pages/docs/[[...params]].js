
import {useRouter} from 'next/router'
const Docs = () => {
    const router = useRouter()
    const {params = []} = router.query
    console.log(params);

    if (params.length === 2) {
        return (
            <h4> vewing Docs for features {params[0]} and concept {params[1]}</h4>
        )
    } else if (params.length === 1){
        return <h4> Viwing Docs for feature {params[0]}</h4>
    }
    return (
        <div>
            <h3>Docs Home Page</h3>
        </div>
    )
}

export default Docs
