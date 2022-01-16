import {useRouter} from 'next/router';

/*
* Next searcher for a route with the same name as the querystring.
* If not found, it uses the dynamic routes.
* */
const DynamicBlog = () => {
    const router = useRouter();
    const blogid = router.query.blogid;
    return <div>
        This is a dynamic blog page.
        Blog number: {blogid}
    </div>;
};

export default DynamicBlog