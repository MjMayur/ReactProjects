function Form(props) {
  return (
    <>
      <form class="row g-3 needs-validation" novalidate>
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
          <h2>React Add Form Data to Table Component Example</h2>

          <div className="mb-3">
            <div class="md-3 mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={props.onValChange}
                value={props.formObject.name}
                name="name"
                required
              />
            </div>

            <div className="mb-3 ">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={props.onValChange}
                value={props.formObject.email}
                name="email" required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Profile"
                onChange={props.onValChange}
                value={props.formObject.profile}
                name="profile" 
              />
            </div>
            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                onChange={props.onValChange}
                value={props.formObject.date}
                name="date"
              />
            </div>
            <div>
              <button
                className="btn btn-dark"
                onClick={
                  !props.isUpdate ? props.onFormSubmit : props.updateInfo
                }
              >
                {!props.isUpdate ? `Submit` : `Update data`}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Form;
