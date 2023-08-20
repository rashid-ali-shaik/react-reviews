import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Reviews({ data, nextReview, prevReview, random }) {
  const { name, job, image, text } = data;
  return (
    <section>
      <div className="img-container">
        <img src={image} alt={name} />
        <span>
          <FaQuoteRight style={{ color: "white" }} />
        </span>
      </div>
      <h3 className="name">{name}</h3>
      <h4 className="job">{job}</h4>
      <p className="text">{text}</p>
      <div className="icon-container">
        <FaChevronLeft onClick={prevReview} style={{ marginRight: "10px" }} />
        <FaChevronRight onClick={nextReview} />
      </div>
      <button className="btn" onClick={random}>
        suprise me
      </button>
    </section>
  );
}
export default Reviews;
