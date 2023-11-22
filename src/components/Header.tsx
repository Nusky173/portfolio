import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

const Header = () => {
    return (
        <header className='top-0 w-full bg-background'>
            <div className='container flex h-16 items-center space-x-4 sm:space-between sm:space-x-0'>
                <div className='flex gap-6 md:gap-10'>
                    <Avatar>
                        <AvatarImage
                            src='@/../public/avatar.png'
                            alt='my-picture'></AvatarImage>
                    </Avatar>
                </div>
                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <nav>
                        <Button variant='link'>
                            <a href='/'>Me</a>
                        </Button>
                        <Button
                            variant='link'
                            className='color-menu'>
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
