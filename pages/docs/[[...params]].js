import {useRouter} from 'next/router';
/*
* [[...params]].js catches all the files under /docs/..............
* and displays them
*
* use [[...params]].js to render the homepage
* */

const Docs = () => {
    const router = useRouter();
    const {params = []} = router.query
    const display = {
        0: <span>Docs Homepage</span>,
        1: <span>Docs <br/> {params[0]}</span>,
        2: <span>Docs <br/>  {params[0]} {params[1]}</span>,
        3: <span>Docs <br/>  {params[0]} {params[1]} {params[2]}</span>
    };

    return <>
        {display[params.length]}
    </>
}

export default Docs