// Write your code here.
import './index.css'

const BannerSection = props => {
  const {BannerLists} = props
  const {headerText, description, className} = BannerLists

  return (
    <div className="card">
      <li className={className}>
        <div>
          <h1 className="heading">{headerText}</h1>
          <p className="para">{description}</p>

          <button className="btn" type="button">
            Show More
          </button>
        </div>
      </li>
    </div>
  )
}

export default BannerSection
