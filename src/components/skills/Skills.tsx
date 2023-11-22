type SkillsProps = {
    className?: string;
    children: React.ReactNode;
};

type SkillsTitleProps = {
    className?: string;
    children: string;
};

type SkillsValuesContentProps = {
    children: React.ReactNode;
};

type SkillsValueProps = {
    className?: string;
    children: React.ReactNode;
};

type SkillsIconProps = {
    url: string;
    children: string;
};

const Skills = (props: SkillsProps) => (
    <div className={`${props.className}`}>{props.children}</div>
);

const SkillsTitle = (props: SkillsTitleProps) => (
    <h3 className={`text-3xl text-start ml-2 mb-4 ${props.className}`}>
        {props.children}
    </h3>
);

const SkillsValuesContent = (props: SkillsValuesContentProps) => (
    <ul className='text-lg text-left ml-2'>{props.children}</ul>
);
const SkillsValue = (props: SkillsValueProps) => (
    <li className={`mb-2 ${props.className}`}>{props.children}</li>
);

const SkillsIcon = (props: SkillsIconProps) => (
    <div className='ml-2 flex gap-2'>
        <img
            src={props.url}
            height='24'
            width='24'
        />
        {props.children}
    </div>
);

export { Skills, SkillsIcon, SkillsTitle, SkillsValue, SkillsValuesContent };
