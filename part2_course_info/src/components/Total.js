
const Total = ({ course }) => {
    const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    
    return(
        <p><strong>Total of {sum} exercises</strong></p>
    )
}
export default Total