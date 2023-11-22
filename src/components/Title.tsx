export type TitleProps = {
    children: string;
    id: string;
};

const Title = ({ children, id }: TitleProps) => {
    return (
        <div
            className='flex flex-1 w-full justify-center mt-32 mb-10 text-5xl'
            id={id}>
            {children}
        </div>
    );
};

export default Title;
