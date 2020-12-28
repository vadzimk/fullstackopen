import Part from "./Part";

const Content = ({course}) => {
// console.log(course)
    return (
        <div>
            {course.parts.map(part => <Part key={part.name} part={part}/>)}
        </div>
    )
}

export default Content