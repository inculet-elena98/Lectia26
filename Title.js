import BodyText from "./BodyText"

const Title = ({ title, subTitle }) => {
  // const { title, subTitle } = props
  return (
    <div>
      <h1> {title}</h1>
      <p> {subTitle}</p>
      <BodyText text={subTitle} />
    </div>
  )
}
export default Title