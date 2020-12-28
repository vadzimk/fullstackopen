const Total = ({course}) => {
    let sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    sum = course.parts.reduce(
        (a, c) => {
            return a + c.exercises  // the first call a = initial value
        }, 0  // initial value of sum is zero
    )

    return (
        <p><strong>Total of {sum} exercises</strong></p>
    )
}
export default Total