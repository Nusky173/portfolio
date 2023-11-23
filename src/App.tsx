import { ChefHat, Construction, ExternalLink, Landmark } from 'lucide-react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import {
    Skills,
    SkillsIcon,
    SkillsTitle,
    SkillsValue,
    SkillsValuesContent,
} from './components/skills/Skills';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './components/ui/card';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './components/ui/tooltip';

function App() {
    return (
        <>
            <Header></Header>
            <main className='flex flex-col flex-1 items-start mt-8 lg:mt-24'>
                <div className='text-start text-6xl'>
                    Hello !
                    <span className='ml-4 text-4xl lg:text-5xl'>
                        I'm a Software Engineer.
                    </span>
                </div>
                <img
                    className='rounded-full absolute inset-x-3/4 inset-y-56 hidden lg:block'
                    width='250'
                    height='250'
                    src='https://avatars.githubusercontent.com/u/45296536?v=4'
                    alt='my-picture'
                />
                <div className='text-start my-4 lg:my-0 text-6xl lg:text-7xl'>
                    Simon Lecordier
                </div>
                <div className='text-start text-4xl lg:text-4xl mt-4'>
                    Looking for opportunities as a web Developper.
                </div>
                <div className='text-start text-4xl lg:text-4xl mt-6'>
                    Based in Nantes, can move to Rennes.
                </div>

                <div className='my4 lg:my-16 w-full md:flex md:justify-end'>
                    <div className='flex flex-col md:flex-row mt-4 flex-wrap items-end gap-4'>
                        <Button className='rounded-md'>
                            <a href='https://github.com/Nusky173'>Github</a>
                        </Button>
                        <Button className='rounded-md'>
                            <a href='https://www.linkedin.com/in/simon-lecordier-511a69199/'>
                                Linkedin
                            </a>
                        </Button>
                        <Button className='rounded-md'>
                            <a href='https://twitter.com/ShimonCode'>Twitter</a>
                        </Button>
                        <Button className='rounded-md'>
                            <a href='mailto:simon50.lecordier@gmail.com'>
                                simon50.lecordier@gmail.com
                            </a>
                        </Button>
                    </div>
                </div>
                <Title id='skills'>Skills</Title>
                <div className='flex flex-1 flex-wrap w-full gap-y-12 lg:gap-y-6 justify-around lg:justify-between'>
                    <Skills className='basis-1/2 lg:basis-1/6'>
                        <SkillsTitle>Front-End</SkillsTitle>
                        <SkillsValuesContent>
                            <SkillsValue>
                                <SkillsIcon url='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'>
                                    React
                                </SkillsIcon>
                            </SkillsValue>
                            <SkillsValue>
                                <SkillsIcon url='data:image/png;base64,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'>
                                    Angular
                                </SkillsIcon>
                            </SkillsValue>
                            <SkillsValue>
                                <SkillsIcon url='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADqUlEQVR4Ae1XA7dkPRC8/+Kz7afPtu21bdu2bdv27rNt27ZubepMes7D7Ky9fU6fZIKuSqeSuTEcxkUajkPdJykvUg6HYR6mKk3HYR64ke5giWmqEhprkvMkH8NwUBUNDAJb6zfBLeCKhK4TmwSKdGc9O5Qrpjc6A3TGJbg7iKUxi0gABGQpqb+ZTgySYCaIaci+aIa4RW7FNLQ4bikBB73FxGYGcDv9AYEHBO5cAjyn13TVNpnrRB/O0nZsw1aQBoGuymWOswZ8c4g7XhvkhlcHurHk74Y4NycDXO3LA1zxykBXfDjGCz/N8McfcwLx/VQ/vDfKC28MbkTWNgEGYYD5R5MQnVEGv4RiBCYWIyipBMHJFmedbX7xxYjJLMO0/QkE5mrRdkkIToXmIae4GhXVdaiqqUdZVR3ySqqx/FQKSdjXAFP4Yj9XnAjOxZXaXt9sPNztLIZtjYY9I/GGW2E7A8OYATfMPJjIVcI1qgAXIguQWVgFsdT8SpyPKGAfM4Jxu+KYORSU1UAsMacCcw4nYvSOWMxSsXziitScfLw1xLoN9kX4lirf1IOf73cBe32yILb2XBqe7nXeOufF/q7otDwMNNM0UV9v4o/ZgXi8xzm8pLbmmd7n8fpgN3yrtMAMX5UIOeElBbBPpVls3fk0PNfnAlxGWPvReYWFAMFpE/fE4fm+F/C6OgHvjPTkONbtiNAegQGXJiBH7pNx3tYtEBKHAnLQcmEwxUlhc7xk+UpuQvsZeFYTaDhm5PYYiNVpEjQ3pZX/FwRzDLVy4wmIeHkUe62JQFxWOcQkG6YqBm2KYizGvLEEZEX8LQADNkRS+aDV1pmglVTU4qtJvnhDCdLpRhEQcAZ9TQvOSc/h3vNCa0hi2JZoipNxb1wG5Ij9rK5eHjmO53knEG++YrVysXG7YvFcX8tc+Si1+0nuZIvAOSGgCep7gKdg9dk0Hkn8NiuAwsMur6xGomyzJMRUWmFc09BPMbC81gywnwHbLwtFQ6usqRMBivF6510gWKYh4CyZjWvJAMXEvWf6YzLLZaViVvFtcs2gPkzeGfI2aPI00x02ssFJBGi3NBTtlX8/zU/+1ThXxihCnvh3fhCPG8bujMUodS90WxWOzyf6mOq6JjgJ13MOseVxqp9NBHe/5H8DV8lU0ym6huAN/z94473Q7wKFRhEyezwh+uzLq0g/Tp0mBxuskI1yGWDa/NjQeqA7CaiNq9tJjxF9CLCAa6xJzpNDjIuEJY0NJaLCJgAAAABJRU5ErkJggg=='>
                                    TypeScript
                                </SkillsIcon>
                            </SkillsValue>
                        </SkillsValuesContent>
                    </Skills>

                    <Skills className='basis-1/2 lg:basis-1/6'>
                        <SkillsTitle>Back-End</SkillsTitle>
                        <SkillsValuesContent>
                            <SkillsValue>
                                <SkillsIcon url='https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/197px-Java_Logo.svg.png'>
                                    Java
                                </SkillsIcon>
                            </SkillsValue>
                            <SkillsValue>
                                <SkillsIcon url='https://e7.pngegg.com/pngimages/340/226/png-clipart-purple-and-white-logo-c-computer-programming-software-development-programmer-marklogic-coder-miscellaneous-purple.png'>
                                    C Sharp
                                </SkillsIcon>
                            </SkillsValue>
                            <SkillsValue>
                                <SkillsIcon url='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'>
                                    PostgreSQL
                                </SkillsIcon>
                            </SkillsValue>
                        </SkillsValuesContent>
                    </Skills>

                    <Skills className='basis-1/2 lg:basis-1/4'>
                        <SkillsTitle>Project Management</SkillsTitle>
                        <SkillsValuesContent>
                            <SkillsValue>
                                <SkillsIcon url='https://cdn-icons-png.flaticon.com/512/25/25231.png'>
                                    GitHub
                                </SkillsIcon>
                            </SkillsValue>
                            <SkillsValue>
                                <SkillsIcon url='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEUAAADiQyriQyjfQCjiQyjiQij/gADiQin4Uw3jQSneQCbkRyriQyjqUCb7bCbuVifzXibyWyjyXCbzWif5mSb2dSfvUCD1YSb8oib2hCbuZiL0hybxfCbweSfwcSPweSjmCvDDAAAAIHRSTlMAMf4giXACyQtJFRW0cP7/tyySR/z/ENb//w/WjkcSaXdrqYkAAADmSURBVHgBfdAFDsNAEANAxw0zluH/v+wql4NsYQRHjlcKVlGEHX0XkQcoB9InYjKBkpAxNinJDEpGModRUJTYqSgKGDVFoieIOgjrGRkFKxe2B6vkKgnCTPQEWxvRqBGoaUTmJxix5+/stJ8qNPyrQdu2HX/o5FECYUQ924BNqHcbMKjYextQJV1roVcJ9d5jaD1dLwZgbL3Ofm6NEH2Y2L/3EGGHMmIztc48L601wTmezNVyFhezP+Vw7JjLeTWbemWQ+vNmXsJ663o7O7crvrlvFfMdPzzWxPzAT8+b1D/xz+uFvTeXVhe3WIiAaQAAAABJRU5ErkJggg=='>
                                    GitLab
                                </SkillsIcon>
                            </SkillsValue>
                            <SkillsValue>
                                <SkillsIcon url='https://e7.pngegg.com/pngimages/149/630/png-clipart-jira-software-full-logo-tech-companies-thumbnail.png'>
                                    Jira
                                </SkillsIcon>
                            </SkillsValue>
                        </SkillsValuesContent>
                    </Skills>

                    <Skills className='basis-1/2 lg:basis-1/6'>
                        <SkillsTitle>Other</SkillsTitle>
                        <SkillsValuesContent>
                            <SkillsValue>
                                <SkillsIcon url='https://variwiki.com/images/a/a1/Docker.png'>
                                    Docker
                                </SkillsIcon>
                            </SkillsValue>
                            <SkillsValue className='ml-2'>
                                Unit Testing
                            </SkillsValue>
                        </SkillsValuesContent>
                    </Skills>

                    <Skills className='basis-1/2 lg:basis-1/6'>
                        <SkillsTitle>Soft Skills</SkillsTitle>
                        <SkillsValuesContent>
                            <SkillsValue className='ml-2'>Curious</SkillsValue>
                            <SkillsValue className='ml-2'>Patient</SkillsValue>
                            <SkillsValue className='ml-2'>
                                Meticulous
                            </SkillsValue>
                            <SkillsValue className='ml-2'>
                                Organized
                            </SkillsValue>
                        </SkillsValuesContent>
                    </Skills>
                </div>
                <Title id='projects'>Projects</Title>
                <div className='flex flex-wrap flex-1 w-full justify-center gap-6'>
                    <Card className='max-w-md'>
                        <CardHeader>
                            <div className='flex justify-between w-full mb-0'>
                                <Landmark />
                                <Button variant='link'>
                                    <a href='https://mythologie.vercel.app'>
                                        <ExternalLink />
                                    </a>
                                </Button>
                            </div>
                            <CardTitle className='pb-4 text-lg'>
                                Mythology
                            </CardTitle>
                            <CardDescription className='text-start'>
                                A web site where I transcribe informations about
                                mythologies I had interest in.
                            </CardDescription>
                            <CardContent className='flex flex-1 flex-wrap w-full gap-2 justify-center py-4'>
                                <Badge variant='outline'>NextJs</Badge>
                                <Badge variant='outline'>React</Badge>
                                <Badge variant='outline'>GitHub</Badge>
                                <Badge variant='outline'>Vercel</Badge>
                                <Badge variant='outline'>Typescript</Badge>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    <Card className='max-w-md'>
                        <CardHeader>
                            <div className='flex justify-between w-full mb-0'>
                                <ChefHat />
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Construction />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>In construction</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <CardTitle className='pb-4 text-lg'>
                                Recipes Pool
                            </CardTitle>
                            <CardDescription className='text-start'>
                                A Saas project where users can store their
                                favourites cooking recipes and find them
                                wherever they are.
                            </CardDescription>
                            <CardContent className='flex flex-1 w-full flex-wrap gap-2 justify-center py-4'>
                                <Badge variant='outline'>NextJs</Badge>
                                <Badge variant='outline'>React</Badge>
                                <Badge variant='outline'>Typescript</Badge>
                                <Badge variant='outline'>Prisma</Badge>
                                <Badge variant='outline'>NextAuth</Badge>
                                <Badge variant='outline'>Github</Badge>
                                <Badge variant='outline'>ReactQuery</Badge>
                                <Badge variant='outline'>Tailwind</Badge>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </div>
                <Title id='experiences'>Experiences</Title>
                <div className='flex flex-wrap flex-1 w-full gap-6 justify-center'>
                    <Card className='max-w-md'>
                        <CardHeader>
                            <CardTitle className='text-lg'>
                                FullStack & Mobile Developer
                            </CardTitle>
                            <CardDescription className='text-md'>
                                Moovency
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='text-start text-sm text-gray-500'>
                            Build and deploy a Saas innovative, high-performance
                            solution to help you assess and optimise the
                            ergonomics of your workstations.
                        </CardContent>
                        <CardFooter className='flex flex-1 w-full flex-wrap gap-2 justify-center py-4'>
                            <Badge variant='outline'>C#</Badge>
                            <Badge variant='outline'>Angular</Badge>
                            <Badge variant='outline'>MySQL</Badge>
                            <Badge variant='outline'>Typescript</Badge>
                            <Badge variant='outline'>ASP .NET Core</Badge>
                            <Badge variant='outline'>
                                Jira & BitBucket & Confluence
                            </Badge>
                            <Badge variant='outline'>Docker</Badge>
                            <Badge variant='outline'>AWS Cloud </Badge>
                        </CardFooter>
                    </Card>
                    <Card className='max-w-md'>
                        <CardHeader>
                            <CardTitle className='text-lg'>
                                FullStack Developer
                            </CardTitle>
                            <CardDescription className='text-md'>
                                Aim45
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='text-start text-sm text-gray-500'>
                            Build and deploy a Saas Project to enables the
                            collection, processing, presentation and analysis of
                            time-series data generated by ship systems and
                            infrastructures
                        </CardContent>
                        <CardFooter className='flex flex-1 w-full flex-wrap gap-2 justify-center py-4'>
                            <Badge variant='outline'>Java</Badge>
                            <Badge variant='outline'>LitElement</Badge>
                            <Badge variant='outline'>Typescript</Badge>
                            <Badge variant='outline'>PostgreSQL</Badge>
                            <Badge variant='outline'>GitLab</Badge>
                            <Badge variant='outline'>Junit</Badge>
                        </CardFooter>
                    </Card>
                </div>
                <Title id='contact'>Contact</Title>
                <div className='text-center w-full text-lg'>
                    Feel free to contact me by my email or through my social
                    networks.
                </div>
                <div className='flex flex-wrap w-full justify-center my-8 gap-4'>
                    <Button className='rounded-md basis:1/2 lg:basis-0'>
                        <a href='https://github.com/Nusky173'>Github</a>
                    </Button>
                    <Button className='rounded-md'>
                        <a href='https://www.linkedin.com/in/simon-lecordier-511a69199/'>
                            Linkedin
                        </a>
                    </Button>
                    <Button className='rounded-md'>
                        <a href='https://twitter.com/ShimonCode'>Twitter</a>
                    </Button>
                    <Button className='rounded-md'>
                        <a href='mailto:simon50.lecordier@gmail.com'>
                            simon50.lecordier@gmail.com
                        </a>
                    </Button>
                </div>
                <div className='mt-16 w-full text-center'>
                    Designed and powered by Simon Lecordier
                </div>
            </main>
        </>
    );
}

export default App;
