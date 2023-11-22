import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

const Header = () => {
    return (
        <header className='top-0 w-full bg-background -ml-6'>
            <div className='lg:container flex h-16 space-between items-center md:space-x-4'>
                <Avatar>
                    <AvatarImage
                        src='https://avatars.githubusercontent.com/u/45296536?v=4'
                        alt='my-picture'></AvatarImage>
                </Avatar>
                <div className='flex flex-1 items-center justify-end '>
                    <nav className='flex flex-no-wrap w-auto'>
                        <Button
                            variant='link'
                            className='hidden w-0 md:block'>
                            <a href='/'>Me</a>
                        </Button>
                        <Button variant='link'>
                            <a href='#skills'>Skills</a>
                        </Button>
                        <Button variant='link'>
                            <a href='#projects'>Projects</a>
                        </Button>
                        <Button variant='link'>
                            <a href='#experiences'>Experiences</a>
                        </Button>
                        <Button variant='link'>
                            <a href='#contact'>Contact</a>
                        </Button>
                    </nav>
                </div>
            </div>
            <div></div>
        </header>
    );
};

export default Header;
