import Link from 'next/link';

const Home = () => {
    return <div>
        Home <br/>
        <Link href={'/about'}>
            <a>About</a>
        </Link> <br/>
        <Link href={'/blog'}>
            <a>Blog</a>
        </Link> <br/>
        <Link href={'/profile'} replace>
            <a>Profile</a>
        </Link> <br/>
        <Link href={'/docs'} replace>
            <a>Docs</a>
        </Link> <br/>
    </div>;
};

export default Home;