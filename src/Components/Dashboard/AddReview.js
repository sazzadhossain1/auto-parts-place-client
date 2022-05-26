const AddReview = () => {
  const handleReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const review = event.target.review.value;
    const userReview = {
      name: name,
      review: review,
    };
    console.log(userReview);
    const url = `https://young-cove-44857.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div class=" py-40 ">
      <div class=" flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl  mx-auto">
          <div class="card-body">
            <form onSubmit={handleReview}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Review</span>
                </label>
                <input
                  type="text"
                  name="review"
                  placeholder="write a review"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Add a Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
